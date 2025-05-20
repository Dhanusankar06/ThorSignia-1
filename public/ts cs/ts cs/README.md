# AI Cybersecurity Services Website

This is a modern, responsive website for an AI company's cybersecurity services. The website showcases various cybersecurity services including Vulnerability Assessment & Penetration Testing, Cloud Security Assessments, Offensive Security, Red Teaming Services, IOT/OT Security, vCISO, and Training & Awareness.

## Features

- Modern, responsive design with a beautiful UI
- Built with React, TypeScript, and Tailwind CSS
- Smooth animations with Framer Motion
- Comprehensive sections for showcasing cybersecurity services
- Contact forms for inquiries and free security assessments
- Testimonials section to build trust
- Mobile-friendly design

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Code Quality**: ESLint, TypeScript

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-cybersecurity-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
ai-cybersecurity-website/
├── public/               # Static files
├── src/                  # Source files
│   ├── components/       # React components
│   │   └── cybersecurity/# Cybersecurity page components
│   ├── pages/            # Page components
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## Building for Production

To build the website for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Customization

- **Colors**: The main colors can be adjusted in the `tailwind.config.js` file.
- **Content**: Update the content in the respective component files.
- **Images**: Replace the image paths in the components with your own images.

## License

[MIT](LICENSE)

## Acknowledgements

- Design inspired by modern cybersecurity websites
- Icons from Heroicons
- Fonts from Google Fonts 