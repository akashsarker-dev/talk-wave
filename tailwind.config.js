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
      'poppins' : ['Poppins', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'box-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        "reg-image": "url(./src/assets/registration.png)",
      },
      colors: {
        'primary-color': '#5F35F5',
      },
    },
  },
  plugins: [],
}