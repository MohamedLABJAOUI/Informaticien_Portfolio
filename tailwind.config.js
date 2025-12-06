/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#11131f',
        },
        secondary: {
          DEFAULT: '#e59632',
        },
        background: {
          DEFAULT: '#f4f4f4',
        },
        text: {
          DEFAULT: '#1a1a1a',
        },
      },
      fontFamily: {
        'title': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

