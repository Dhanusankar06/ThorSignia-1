"""
This script sets up the database tables for Thor Signia.
It uses the Flask app context to create all tables defined in the models.
"""

from app import create_app, db
from app.models.contact import Contact
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s]: %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)

def setup_database():
    """Create all tables in the database."""
    try:
        # Create the Flask app
        app = create_app()
        
        # Get the database URL being used
        db_url = app.config['SQLALCHEMY_DATABASE_URI']
        logger.info(f"Using database: {db_url if 'sqlite' in db_url else db_url.split('@')[0] + '@...'}") 
        
        # Create all tables within the app context
        with app.app_context():
            # Import models explicitly
            from app.models.contact import Contact
            from app.models.career_application import CareerApplication
            
            # Create tables
            db.create_all()
            logger.info("Database tables created successfully!")
            
            # Verify tables exist
            inspector = db.inspect(db.engine)
            tables = inspector.get_table_names()
            logger.info(f"Available tables in database: {tables}")
            
            if not tables:
                logger.error("No tables found after creation!")
                raise Exception("Failed to create database tables")
            
            # Create test data
            test_contact = Contact(
                name="Test User",
                email="test@example.com",
                message="This is a test message"
            )
            db.session.add(test_contact)
            
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
                logger.info("Test data created successfully!")
                
                # Verify test data exists
                test_contact = Contact.query.first()
                test_career = CareerApplication.query.first()
                
                if test_contact and test_career:
                    logger.info(f"Test contact created with ID: {test_contact.id}")
                    logger.info(f"Test career application created with ID: {test_career.id}")
                else:
                    logger.error("Test data verification failed")
                    raise Exception("Test data verification failed")
            except Exception as e:
                logger.error(f"Failed to create test data: {str(e)}")
                db.session.rollback()
                raise
    
    except Exception as e:
        logger.error(f"Failed to set up database: {str(e)}")
        raise

if __name__ == "__main__":
    setup_database()