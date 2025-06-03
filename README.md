# Thor Signia

Thor Signia is a modern web application built with React and Flask, offering intelligent voice, chat, and campaign automation solutions.

## Features

- Contact Form with reCAPTCHA integration
- MySQL database integration
- RESTful API endpoints
- Modern UI with responsive design
- Security features including rate limiting and input sanitization

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Shadcn/ui components

### Backend
- Flask
- SQLAlchemy
- PyMySQL
- Flask-CORS

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- MySQL

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/thor-signia.git
cd thor-signia
```

2. Install frontend dependencies
```bash
npm install
```

3. Set up Python virtual environment and install backend dependencies
```bash
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
```

4. Create .env file in the root directory with the following variables:
```env
FLASK_ENV=development
SECRET_KEY=your_secret_key
MYSQL_USER=your_mysql_user
MYSQL_PASSWORD=your_mysql_password
MYSQL_HOST=your_mysql_host
MYSQL_PORT=your_mysql_port
MYSQL_DB=your_mysql_database
RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
```

### Running the Application

1. Start the frontend development server:
```bash
npm run dev
```

2. Start the Flask backend server:
```bash
python app.py
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (development only)
- `GET /api/contact/:id` - Get specific contact (development only)

### Health Check
- `GET /api/health` - API health check endpoint

## Deployment

The application is configured for deployment on Vercel (frontend) and can be deployed to any Python hosting service for the backend.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Thor Signia - info@thorsignia.online
