from app import create_app, db
from app.models.contact import Contact
from api.assessment import Assessment
from sqlalchemy import text
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s]: %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)

def test_mysql_connection():
    """Test the connection to MySQL and create tables."""
    try:
        # Create the Flask app
        app = create_app()
        
        # Get the database URL being used
        db_url = app.config['SQLALCHEMY_DATABASE_URI']
        logger.info(f"Using database URL: {db_url.split('@')[0]}@{db_url.split('@')[1]}")
        
        # Test the connection by running a simple query
        with app.app_context():
            try:
                # Test connection
                db.session.execute(text('SELECT 1'))
                logger.info("MySQL connection test successful!")
                
                # Create tables
                db.create_all()
                logger.info("Database tables created successfully!")
                
                # Verify tables
                result = db.session.execute(text("""
                    SHOW TABLES;
                """))
                tables = [row[0] for row in result]
                logger.info(f"Tables in database: {', '.join(tables)}")
                
                return True
                
            except Exception as e:
                logger.error(f"Database operation failed: {e}")
                return False
                
    except Exception as e:
        logger.error(f"Database connection test failed: {e}")
        return False

if __name__ == "__main__":
    test_mysql_connection() 