/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#F26B38',
        'secondary-orange': '#F1794C',
        'primary-text': '#141414',
        'secondary-text': '#414141',
      },
      fontFamily: {
        roboto: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
