/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#5182BB',
        'secundary-blue': '#2F2361',
        'primary-green': '#14A74F',
      },
      fontFamily: {
        'martel': 'Martel',
      },
    },
  },
  plugins: [
    // https://daisyui.com/docs/
    require('daisyui'),
  ],
};
