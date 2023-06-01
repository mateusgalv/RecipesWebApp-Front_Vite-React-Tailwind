/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      carlito: ['Carlito', 'sans-serif'],
    },
    extend: {
      colors: {
        'crayola': 'fd9f26',
        'carmine-pink': '#ee4e34',
        'rusty-red': '#d82b42',
        'meat-brown': '#e3b448',
      },
    },
  },
  plugins: [],
}

