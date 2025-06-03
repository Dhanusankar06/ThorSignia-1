from flask import Blueprint, jsonify, request, current_app, make_response
from app import db
from app.models.contact import Contact
import logging
import os
import re
import time
from functools import wraps
from datetime import datetime, timedelta

bp = Blueprint('contacts', __name__, url_prefix='/api/contact')
logger = logging.getLogger(__name__)

# Simple in-memory rate limiting store
# In production, this should use Redis or similar
ip_request_count = {}
ip_request_timestamp = {}
MAX_REQUESTS = 5  # Maximum 5 requests
RATE_LIMIT_WINDOW = 60  # per minute (60 seconds)

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

def add_security_headers(response):
    """Add security headers to response"""
    response.headers['Content-Security-Policy'] = "default-src 'self'"
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains'
    return response

@bp.after_request
def secure_headers(response):
    """Add security headers to all responses"""
    return add_security_headers(response)

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

@bp.route('', methods=['POST', 'OPTIONS'])
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
        logger.info(f"Received contact form data: {data}")
        
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
        
        logger.info(f"Creating new contact with data: {sanitized_data}")
        
        # Create new contact
        new_contact = Contact(
            name=sanitized_data['name'],
            email=sanitized_data['email'],
            phone=sanitized_data['phone'],
            company=sanitized_data['company'],
            message=sanitized_data['message']
        )
        
        # Save to database
        try:
            logger.info("Attempting to save contact to database...")
            db.session.add(new_contact)
            db.session.commit()
            logger.info(f"Successfully saved contact with ID: {new_contact.id}")
            
            # Create response
            response = jsonify({
                'id': new_contact.id,
                'message': 'Contact saved successfully'
            })
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response, 201
            
        except Exception as db_error:
            logger.error(f"Database error: {str(db_error)}")
            db.session.rollback()
            raise
        
    except Exception as e:
        logger.exception("Error processing contact submission")
        if 'db' in locals():
            db.session.rollback()
        
        response = jsonify({
            "error": "Failed to save contact",
            "message": str(e) if os.environ.get('FLASK_ENV') != 'production' else "An internal server error occurred"
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Content-Type', 'application/json')
        return response, 500

@bp.route('', methods=['GET'])
def get_contacts():
    """Get all contacts (development environment only)."""
    try:
        # In production, don't allow listing all contacts
        if os.getenv('FLASK_ENV') == 'production':
            return jsonify({"error": "Access restricted in production"}), 403
        
        contacts = Contact.query.order_by(Contact.created_at.desc()).all()
        
        # Return with proper CORS headers
        response = jsonify([contact.to_dict() for contact in contacts])
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
        
    except Exception as e:
        logger.exception("Error retrieving contacts")
        
        # Return error with proper CORS headers
        response = jsonify({"error": "Failed to retrieve contacts"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 500

@bp.route('/<int:id>', methods=['GET'])
def get_contact(id):
    """Get a specific contact (development environment only)."""
    try:
        # In production, don't allow accessing specific contacts
        if os.getenv('FLASK_ENV') == 'production':
            return jsonify({"error": "Access restricted in production"}), 403
        
        contact = Contact.query.get(id)
        if not contact:
            # Return error with proper CORS headers
            response = jsonify({"error": "Contact not found"})
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response, 404
            
        # Return with proper CORS headers
        response = jsonify(contact.to_dict())
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
        
    except Exception as e:
        logger.exception(f"Error retrieving contact {id}")
        
        # Return error with proper CORS headers
        response = jsonify({"error": "Failed to retrieve contact"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 500

# Health check route
@bp.route('/health', methods=['GET'])
def health_check():
    """Simple route to check if the API is running."""
    response = jsonify({
        "status": "ok",
        "service": "contacts-api"
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response 