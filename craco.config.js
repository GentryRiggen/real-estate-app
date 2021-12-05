const path = require('path');

module.exports = {
  webpack: {
    alias: {
      domains: path.join(path.resolve(__dirname, './src/domains')),
      lib: path.join(path.resolve(__dirname, './src/lib')),
      assets: path.join(path.resolve(__dirname, './src/assets')),
    },
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
