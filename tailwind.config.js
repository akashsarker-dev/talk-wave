/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
      'opensans' : ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-color': '#5F35F5',
      },
    },
  },
  plugins: [],
}