/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '1st': '280px',
      '2nd': '360px',
      '3rd': '460px',
      '4th': '560px',
      '5th': '660px',
      '6th': '760px',
      'padding':'960px', 
      '7th': '1000px'
    }
  },
  plugins: [],
}