/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      },
      colors: {
        darkGrey: "hsl(0, 0%, 59%)"
      }
    },
  },
  plugins: [],
}