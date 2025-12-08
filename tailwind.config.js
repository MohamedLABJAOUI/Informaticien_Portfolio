/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0C0F1A', // Noir bleuté profond
          section: '#101422', // Gris-noir doux
        },
        primary: {
          DEFAULT: '#6C5CE7', // Violet électrique
          light: '#A29BFE', // Violet clair néon
        },
        secondary: {
          blue: '#00D8FF', // Bleu cyber néon
          green: '#36F1CD', // Vert aqua lumineux
        },
        accent: {
          gold: '#F8D477', // Or doux premium
          beige: '#F3ECE0', // Beige ultra-clair
        },
        text: {
          main: '#FFFFFF', // Texte principal
          muted: '#A7B1C4', // Texte secondaire / muted
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

