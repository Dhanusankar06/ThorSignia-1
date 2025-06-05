from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
import logging
import urllib.parse
import pymysql

# Register PyMySQL as the MySQL driver
pymysql.install_as_MySQLdb()

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
    
    # Configure CORS with specific origins
    CORS(app, resources={
        r"/*": {
            "origins": [
                "http://localhost:5000",
                "http://127.0.0.1:5000",
                "http://localhost:3000",
                "http://127.0.0.1:3000",
                "https://www.thorsignia.in"
            ],
            "methods": ["GET", "POST", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization"]
        }
    })

    
    # Database Configuration
    try:
        # First try to use DATABASE_URL if provided
        database_url = os.getenv('DATABASE_URL')
        
        if database_url:
            # Convert mysql:// to mysql+pymysql:// if necessary
            if database_url.startswith('mysql://'):
                database_url = database_url.replace('mysql://', 'mysql+pymysql://', 1)
            logger.info("Using DATABASE_URL for connection")
        else:
            # If DATABASE_URL not provided, construct from individual components
            mysql_user = os.getenv('MYSQL_USER')
            mysql_password = os.getenv('MYSQL_PASSWORD')
            mysql_host = os.getenv('MYSQL_HOST')
            mysql_port = os.getenv('MYSQL_PORT')
            mysql_db = os.getenv('MYSQL_DB')
            
            if all([mysql_user, mysql_password, mysql_host, mysql_port, mysql_db]):
                encoded_password = urllib.parse.quote_plus(mysql_password)
                database_url = f"mysql+pymysql://{mysql_user}:{encoded_password}@{mysql_host}:{mysql_port}/{mysql_db}"
                logger.info(f"Constructed MySQL URL from environment variables")
            else:
                logger.warning("No valid MySQL configuration found")
                database_url = None
        
        if database_url:
            app.config['SQLALCHEMY_DATABASE_URI'] = database_url
            app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
            app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
                'pool_size': 10,
                'pool_recycle': 60,
                'pool_pre_ping': True
            }
            
            # Initialize the database
            db.init_app(app)
            
            # Initialize database and create tables
            with app.app_context():
                try:
                    # Ensure database is initialized
                    db.init_app(app)
                    
                    # Create tables if they don't exist
                    logger.info("Creating database tables...")
                    
                    # Import models to ensure they're registered
                    from app.models.contact import Contact
                    from app.models.career_application import CareerApplication
                    
                    # Create tables explicitly
                    try:
                        db.create_all()
                        logger.info("Database tables created successfully!")
                        
                        # Verify tables
                        inspector = db.inspect(db.engine)
                        tables = inspector.get_table_names()
                        logger.info(f"Available tables in database: {tables}")
                        
                        if not tables:
                            logger.error("No tables found after creation!")
                            raise Exception("Failed to create database tables")
                        
                        # Create test data to verify
                        test_contact = Contact(
                            name="Test User",
                            email="test@example.com",
                            message="This is a test message"
                        )
                        db.session.add(test_contact)
                        
                        try:
                            db.session.commit()
                            logger.info("Test data created successfully!")
                            
                            # Verify test data was created
                            test_contact = Contact.query.first()
                            if test_contact:
                                logger.info(f"Test contact created with ID: {test_contact.id}")
                            else:
                                logger.error("Failed to verify test data creation")
                                raise Exception("Test data creation verification failed")
                        except Exception as e:
                            logger.error(f"Failed to create test data: {str(e)}")
                            db.session.rollback()
                            raise
                        
                        # Verify career application table
                        test_career = CareerApplication(
                            job_title="Test Job",
                            name="Test User",
                            email="test@example.com",
                            mobile_number="1234567890",
                            original_filename="test.pdf",
                            file_path="/path/to/test.pdf"
                        )
                        db.session.add(test_career)
                        
                        try:
                            db.session.commit()
                            logger.info("Career application test data created successfully!")
                        except Exception as e:
                            logger.error(f"Failed to create career application test data: {str(e)}")
                            db.session.rollback()
                            raise
                    except Exception as e:
                        logger.error(f"Failed to create tables: {str(e)}")
                        raise
                    
                except Exception as e:
                    logger.error(f"Database initialization error: {str(e)}")
                    raise
                
                # Test the connection
                try:
                    db.engine.connect()
                    logger.info("Successfully connected to MySQL database!")
                except Exception as e:
                    logger.error(f"Database connection error: {str(e)}")
                    raise
                
        else:
            raise Exception("No valid database configuration found")
            
    except Exception as e:
        logger.error(f"Database configuration error: {str(e)}")
        raise
    
    with app.app_context():
        # Import parts of the application
        from app.routes import contacts
        
        # Register blueprints
        app.register_blueprint(contacts.bp)
        from api.index import api_bp
        app.register_blueprint(api_bp)
        
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