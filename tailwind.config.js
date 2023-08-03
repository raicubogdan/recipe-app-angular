/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        varela: ['Varela Round', 'sans-serif'],
      },
      colors: {
        first: '#323345',
        second: '#f3de8a',
        third: '#eb9486',
        fourth: '#7e7f9a',
        fifth: '#f9f8f8',
      },
    },
  },
  plugins: [],
}
