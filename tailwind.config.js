/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "manrope" : ['manrope']
      },
      colors: {
        transparent: 'transparent',
        'bg' : '#FFFFFF',
        'primary' : '#4D77FF',
        'secondary' : '#EDF1FF',
        'textblack' : '#121212',
        'textgrey' : '#696969',
      },
    },
  },
  plugins: [],
}