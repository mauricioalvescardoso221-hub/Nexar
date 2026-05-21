/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Defines custom colors for the brand palette
      colors: {
        'brand-blue': {
          DEFAULT: '#d0dbe5', // Primary dark blue
          light: '#1E4A8A',
        },
        'brand-yellow': {
          DEFAULT: '#0f2c59', // Accent yellow for CTAs
          dark: '#E0A800',
        },
        'brand-gray': {
          light: '#F8F9FA', // Light background for sections
          medium: '#6C757D', // Text color
          dark: '#343A40',   // Darker text/headings
        }
      },
      // Defines custom font families for a clean look
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
