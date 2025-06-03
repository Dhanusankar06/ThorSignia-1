# Thor Signia Website

## Overview

This is the codebase for the Thor Signia website, featuring a modern React frontend and a Flask Python backend with PostgreSQL for data storage. The site includes interactive case studies, a dynamic Careers page with resume upload, and robust backend integration.

## Features

- Modern React frontend with TailwindCSS and shadcn-ui
- Flask backend with PostgreSQL database
- **Careers page**: Apply for jobs/internships, upload resume (PDF, DOC, DOCX, TXT)
- All applications stored securely in the database
- Contact form with secure email notifications
- Consistent branding and button styles across all pages
- Ready for Vercel/Railway deployment

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Python 3.8 or higher
- pip

### Installation

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the development servers (in separate terminals):
   ```bash
   npm run dev      # Frontend
   python app.py    # Backend
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## Backend API

- `POST /api/contacts` - Create a new contact submission
- `POST /api/careers/apply` - Apply for a job/internship (name, email, mobile, resume)
- `GET /api/contacts/health` - Health check endpoint

## Database & Storage

- **PostgreSQL** (production) or SQLite (development fallback)
- All career applications and resumes are stored in the database
- Email notifications for contact form submissions
- Local JSON backup for contact form (development only)

## Careers Page

- Browse open positions and internships
- Click **Apply** to open a modal and submit your application
- Upload your resume (PDF, DOC, DOCX, TXT)
- All fields are required (name, email, mobile number, resume)
- Applications are stored in the database and can be managed by the backend

## Troubleshooting

- **Linter errors**: If you see errors about `ChangeEvent` or `FormEvent`, ensure you are using the correct React types. Use `React.ChangeEvent` and `React.FormEvent` in your code.
- **Missing files**: If you delete a component, remove its import from all files (see Vite errors for missing files).
- **Database issues**: Ensure your `DATABASE_URL` is set correctly in your environment or `.env` file.

## Project Structure

- `/src` - Frontend React code (pages, components, UI)
- `/app` - Backend Flask code (models, routes, services)
- `/public` - Static assets (images, resumes, etc.)
- `/dist` - Built frontend (after running `npm run build`)

## Contributing

Pull requests are welcome! Please:
- Follow the existing code style
- Test your changes locally
- Update documentation as needed

## Support

For issues or questions, open an issue on GitHub or contact the Thor Signia team.

---

## Security Features

### Contact Form Protection
- **reCAPTCHA v3**: Invisible bot protection for the contact form
  - Frontend integration in Contact.tsx using Google's reCAPTCHA API
  - Backend verification in contact.py model
- **Honeypot field**: Additional bot detection mechanism
- **Timing protection**: Prevents automated form submissions

### Setup reCAPTCHA
1. Register your site at [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Choose reCAPTCHA v3
3. Add your domain(s) without protocols (e.g., `thor-signia-three.vercel.app` not `https://thor-signia-three.vercel.app`)
4. Get your Site Key and Secret Key
5. Update the frontend:
   - Use the Site Key in `Contact.tsx` (replace the existing `RECAPTCHA_SITE_KEY` value)
   - Ensure the key is used in both the script loading and execution functions
6. Update the backend:
   - Add `RECAPTCHA_SECRET_KEY` to your environment variables
   - Ensure the Python `requests` library is installed


Thor Signia © 2024. All rights reserved.
