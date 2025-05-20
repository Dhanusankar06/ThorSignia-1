/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#88bf42',
        secondary: '#0f0326',
        neutral: '#696869',
      },
    },
  },
  plugins: [],
} 