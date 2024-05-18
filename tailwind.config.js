/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        fotofundo: "url('/fotoprincipal.jpg')",
      },
      colors: {
        'primary-blue': '#5182BB',
        'secundary-blue': '#2F2361',
        'primary-green': '#14A74F',
        'primary-red': '#EE1F28',
      },
      fontFamily: {
        martel: 'Martel',
      },
    },
  },
  plugins: [
    // https://daisyui.com/docs/
    require('daisyui'),
    require('rippleui'),
  ],
  daisyui: {
    // prefix: 'daisy',
    themes: ['light', 'dark', 'cupcake'],
  },
  rippleui: {
    // prefix: 'ripple',
  },
};
