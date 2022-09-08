/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/'],
  setupFiles: [
    '<rootDir>/packages/jest-config/scripts/jest-setup-mock.js',
    '<rootDir>/packages/jest-config/node_modules/jest-canvas-mock',
  ],
  setupFilesAfterEnv: ['<rootDir>/packages/jest-config/scripts/jest-setup.ts'],
  moduleNameMapper: {
    '\\.(css|less)':
      '<rootDir>/packages/jest-config/node_modules/identity-obj-proxy/src/index.js',
  },
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$':
      '<rootDir>/packages/jest-config/scripts/jest-file-mock.js',
    '^.+\\.(ts|tsx)$':
      '<rootDir>/packages/jest-config/node_modules/ts-jest/preprocessor.js',
    '^.+\\.(js|jsx|mjs)$':
      '<rootDir>/packages/jest-config/node_modules/babel-jest/build/index.js',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      diagnostics: false,
      babelConfig: '<rootDir>/babel.config.js',
      useESM: true,
    },
  },
};
