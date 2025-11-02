/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'emerald': {
          DEFAULT: '#059669',
          light: '#34d399',
          dark: '#047857',
        },
        'gold': {
          DEFAULT: '#D4AF37',
          light: '#F4E8B2',
          dark: '#B8941E',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

