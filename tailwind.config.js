module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: '#f4f4f4',
        base: '#2d2d2d',
        'base-light': '#979797',
      },
      fontSize: {
        'sm.5': ['0.9375rem', '1rem'],
        'header-title-sm': ['0.875rem', '2.5rem'],
        'header-title-base': ['1.75rem', '2.5rem'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
