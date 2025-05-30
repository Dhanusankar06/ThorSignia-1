from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
import logging
import urllib.parse

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(name)s: %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

# Initialize SQLAlchemy
db = SQLAlchemy()

def create_app():
    """Initialize the core application."""
    app = Flask(__name__, static_folder='../dist', static_url_path='/')
    
    # Configure security settings
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', os.urandom(24).hex())
    app.config['SESSION_COOKIE_SECURE'] = os.getenv('FLASK_ENV') == 'production'
    app.config['SESSION_COOKIE_HTTPONLY'] = True
    app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
    app.config['PERMANENT_SESSION_LIFETIME'] = 3600  # 1 hour
    
    # Configure CORS to allow requests from any origin
    CORS(app, resources={r"/*": {"origins": "*"}})
    
    # Configure the database - Use Railway MySQL if available, otherwise SQLite
    database_url = os.getenv('DATABASE_URL')
    
    # If DATABASE_URL is not provided, try to construct it from individual components
    if not database_url:
        mysql_user = os.getenv('MYSQL_USER')
        mysql_password = os.getenv('MYSQL_PASSWORD')
        mysql_host = os.getenv('MYSQL_HOST')
        mysql_port = os.getenv('MYSQL_PORT')
        mysql_db = os.getenv('MYSQL_DB')
        
        # If all MySQL environment variables are set, construct the DATABASE_URL
        if mysql_user and mysql_password and mysql_host and mysql_port and mysql_db:
            # URL encode the password to handle special characters
            encoded_password = urllib.parse.quote_plus(mysql_password)
            database_url = f"mysql://{mysql_user}:{encoded_password}@{mysql_host}:{mysql_port}/{mysql_db}"
            logger.info(f"Constructed MySQL URL from environment variables for host: {mysql_host}")
    
    # Configure SQLAlchemy with the database URL
    if database_url:
        app.config['SQLALCHEMY_DATABASE_URI'] = database_url
        logger.info(f"Using MySQL database at {database_url.split('@')[1].split('/')[0] if '@' in database_url else 'unknown host'}")
    else:
        # Fallback to SQLite for local development
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contacts.db'
        logger.info("Using SQLite database")
    
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JSON_SORT_KEYS'] = False
    
    # Security headers middleware
    @app.after_request
    def add_security_headers(response):
        # Add security headers, but allow cross-origin requests
        response.headers['X-Content-Type-Options'] = 'nosniff'
        response.headers['X-XSS-Protection'] = '1; mode=block'
        
        # Set CORS headers to ensure they aren't overridden
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        response.headers['Access-Control-Allow-Methods'] = 'GET, OPTIONS, POST, PUT, DELETE'
        
        return response
    
    # Initialize plugins
    db.init_app(app)
    
    with app.app_context():
        # Import parts of the application
        from app.routes import contacts
        
        # Register blueprints
        app.register_blueprint(contacts.bp)
        from api.index import api_bp
        app.register_blueprint(api_bp)
        
        # Create database tables (if they don't exist)
        db.create_all()
        
        # Add a basic API health check route
        @app.route('/api/health')
        def health_check():
            return {'status': 'ok', 'message': 'Thor Signia API is running'}
        
        # Serve frontend in production
        @app.route('/')
        def index():
            return app.send_static_file('index.html')
        
        @app.route('/<path:path>')
        def catch_all(path):
            try:
                return app.send_static_file(path)
            except:
                return app.send_static_file('index.html')
                
        return app 