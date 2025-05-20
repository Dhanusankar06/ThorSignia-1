from flask import Flask, Response, request, jsonify, make_response, Blueprint

api_bp = Blueprint('api', __name__)

from app import create_app, db
from app.models.contact import Contact
from api.assessment import Assessment
from app.services.email_service import EmailService
import re
import logging
import time
from functools import wraps
import os
from werkzeug.utils import secure_filename

api_bp = Blueprint('api', __name__)

logger = logging.getLogger(__name__)

# Simple in-memory rate limiting store
ip_request_count = {}
ip_request_timestamp = {}
MAX_REQUESTS = 5  # Maximum 5 requests
RATE_LIMIT_WINDOW = 60  # per minute (60 seconds)

# Define upload folder for resumes
UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'uploads')
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

ALLOWED_EXTENSIONS = {'pdf', 'doc', 'docx', 'txt'}

def rate_limit(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        # Get client IP
        ip = request.remote_addr
        current_time = time.time()
        
        # Initialize if IP not seen before
        if ip not in ip_request_count:
            ip_request_count[ip] = 0
            ip_request_timestamp[ip] = current_time
        
        # Reset counter if window has passed
        if current_time - ip_request_timestamp[ip] > RATE_LIMIT_WINDOW:
            ip_request_count[ip] = 0
            ip_request_timestamp[ip] = current_time
        
        # Increment counter
        ip_request_count[ip] += 1
        
        # Check if rate limit exceeded
        if ip_request_count[ip] > MAX_REQUESTS:
            return jsonify({"error": "Rate limit exceeded. Please try again later."}), 429
        
        return f(*args, **kwargs)
    return decorated_function

def validate_email(email):
    """Validate email format"""
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(email_pattern, email) is not None

def sanitize_input(text):
    """Basic input sanitization"""
    if not text:
        return ""
    # Remove potentially dangerous characters
    return re.sub(r'[<>\'";]', '', text)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@api_bp.route('/api/health', methods=['GET'])
def api_health():
    """Health check endpoint."""
    response = jsonify({'status': 'ok', 'message': 'Thor Signia API is running'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@api_bp.route('/api/contacts', methods=['POST', 'OPTIONS'])
@rate_limit
def create_contact():
    """Create a new contact submission."""
    # Handle preflight CORS requests
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        return response
        
    try:
        # Get form data
        data = request.get_json()
        if not data:
            return jsonify({"error": "Invalid JSON data"}), 400
        
        # Validate required fields
        required_fields = ['name', 'email', 'company', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({"error": f"Missing required field: {field}"}), 400
        
        # Validate email format
        if not validate_email(data.get('email', '')):
            return jsonify({"error": "Invalid email format"}), 400
        
        # Sanitize inputs
        sanitized_data = {
            'name': sanitize_input(data['name']),
            'email': sanitize_input(data['email']),
            'phone': sanitize_input(data.get('phone', '')),
            'company': sanitize_input(data['company']),
            'message': sanitize_input(data['message'])
        }
        
        # Validate data lengths
        if len(sanitized_data['name']) > 100:
            return jsonify({"error": "Name is too long (max 100 characters)"}), 400
        if len(sanitized_data['email']) > 120:
            return jsonify({"error": "Email is too long (max 120 characters)"}), 400
        if len(sanitized_data['phone']) > 20:
            return jsonify({"error": "Phone number is too long (max 20 characters)"}), 400
        if len(sanitized_data['company']) > 100:
            return jsonify({"error": "Company name is too long (max 100 characters)"}), 400
        if len(sanitized_data['message']) > 2000:
            return jsonify({"error": "Message is too long (max 2000 characters)"}), 400
        
        # Create new contact
        new_contact = Contact(
            name=sanitized_data['name'],
            email=sanitized_data['email'],
            phone=sanitized_data['phone'],
            company=sanitized_data['company'],
            message=sanitized_data['message']
        )
        
        # Save to database
        db.session.add(new_contact)
        db.session.commit()
        
        # Prepare contact data for email
        contact_data = {
            'name': sanitized_data['name'],
            'email': sanitized_data['email'],
            'phone': sanitized_data['phone'],
            'company': sanitized_data['company'],
            'message': sanitized_data['message'],
            'timestamp': new_contact.created_at.isoformat() if new_contact.created_at else None
        }
        
        # Send email notification - don't block on this
        email_result = EmailService.send_contact_notification(contact_data)
        
        # Backup the submission - don't block on this
        backup_result = EmailService.backup_submission(contact_data) if hasattr(EmailService, 'backup_submission') else {'success': False}
        
        # Create response with proper CORS headers
        response = jsonify({
            'id': new_contact.id,
            'message': 'Contact saved successfully',
            'emailSent': email_result.get('success', False),
            'backupCreated': backup_result.get('success', False)
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 201
        
    except Exception as e:
        logger.exception("Error processing contact submission")
        db.session.rollback()
        
        # Return error with proper CORS headers
        response = jsonify({"error": "Failed to save contact"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 500 

@api_bp.route('/api/assessments', methods=['POST', 'OPTIONS'])
@rate_limit
def create_assessment():
    """Create a new cybersecurity assessment submission."""
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        return response
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Invalid JSON data"}), 400
        required_fields = ['name', 'email', 'company', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({"error": f"Missing required field: {field}"}), 400
        if not validate_email(data.get('email', '')):
            return jsonify({"error": "Invalid email format"}), 400
        sanitized_data = {
            'name': sanitize_input(data['name']),
            'email': sanitize_input(data['email']),
            'phone': sanitize_input(data.get('phone', '')),
            'company': sanitize_input(data['company']),
            'message': sanitize_input(data['message'])
        }
        if len(sanitized_data['name']) > 100:
            return jsonify({"error": "Name is too long (max 100 characters)"}), 400
        if len(sanitized_data['email']) > 120:
            return jsonify({"error": "Email is too long (max 120 characters)"}), 400
        if len(sanitized_data['phone']) > 20:
            return jsonify({"error": "Phone number is too long (max 20 characters)"}), 400
        if len(sanitized_data['company']) > 100:
            return jsonify({"error": "Company name is too long (max 100 characters)"}), 400
        if len(sanitized_data['message']) > 2000:
            return jsonify({"error": "Message is too long (max 2000 characters)"}), 400
        new_assessment = Assessment(
            name=sanitized_data['name'],
            email=sanitized_data['email'],
            phone=sanitized_data['phone'],
            company=sanitized_data['company'],
            message=sanitized_data['message']
        )
        db.session.add(new_assessment)
        db.session.commit()

        # Optional: Send email notification for new assessment request
        assessment_data = {
            'name': sanitized_data['name'],
            'email': sanitized_data['email'],
            'phone': sanitized_data['phone'],
            'company': sanitized_data['company'],
            'message': sanitized_data['message'],
            'timestamp': new_assessment.created_at.isoformat() if new_assessment.created_at else None
        }
        email_sent = False
        if 'EmailService' in globals():
            try:
                email_result = EmailService.send_contact_notification(assessment_data)
                email_sent = email_result.get('success', False)
            except Exception:
                logger.warning("Failed to send assessment notification email")

        response = jsonify({
            'id': new_assessment.id,
            'message': 'Assessment request saved successfully',
            'emailSent': email_sent
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 201
    except Exception as e:
        logger.exception("Error processing assessment submission")
        db.session.rollback()
        response = jsonify({"error": "Failed to save assessment"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 500

@api_bp.route('/api/careers/apply', methods=['POST', 'OPTIONS'])
@rate_limit
def apply_career():
    """Handle resume upload for career applications."""
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        return response

    try:
        if 'resume' not in request.files:
            return jsonify({"error": "No resume file provided"}), 400
        file = request.files['resume']
        if file.filename == '':
            return jsonify({"error": "No file selected"}), 400
        if not allowed_file(file.filename):
            return jsonify({"error": "File type not allowed. Please upload a PDF, DOC, DOCX, or TXT file."}), 400

        job_title = request.form.get('job_title')
        name = request.form.get('name')
        email = request.form.get('email')
        mobile_number = request.form.get('mobile_number')
        # Validate required fields
        if not job_title or not name or not email or not mobile_number:
            return jsonify({"error": "All fields (name, email, mobile number, job title, resume) are required."}), 400
        # Basic sanitization
        name = sanitize_input(name)
        email = sanitize_input(email)
        mobile_number = sanitize_input(mobile_number)
        filename = secure_filename(file.filename)
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(file_path)

        from app.models.career_application import CareerApplication
        new_application = CareerApplication(
            job_title=job_title,
            name=name,
            email=email,
            mobile_number=mobile_number,
            original_filename=filename,
            file_path=file_path
        )
        db.session.add(new_application)
        db.session.commit()

        response = jsonify({"message": "Resume uploaded successfully", "id": new_application.id})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 201

    except Exception as e:
        logger.exception("Error processing career application")
        db.session.rollback()
        response = jsonify({"error": "Failed to process application"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 500 