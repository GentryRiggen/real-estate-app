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
  jest: {
    babel: {
      addPresets: true /* (default value) */,
      addPlugins: true /* (default value) */,
    },
    configure: {
      resetMocks: false,
      setupFilesAfterEnv: ['./src/test/setupTests.ts'],
      collectCoverageFrom: [
        'src/domains/**/components/*.ts',
        'src/domains/**/screens/*.ts',
        'src/domains/**/utils/*.ts',
        'src/lib/**/utils/*.ts',
      ],
      coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/src/test/',
        '<rootDir>/build/',
        '<rootDir>/cypress/',
        '<rootDir>/public/',
      ],
      moduleDirectories: ['./node_modules', './src'],
      moduleNameMapper: {
        '^~/lib/(.*)$': '<rootDir>/src/lib/$1',
        '^~/domains/(.*)$': '<rootDir>/src/domains/$1',
        '^~/assets/(.*)$': '<rootDir>/src/assets/$1',
      },
      moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
      transform: {
        '^.+\\.(js|jsx|ts|tsx)$': [
          'babel-jest',
          { configFile: './src/test/.babelrc' },
        ],
      },
    },
  },
};
