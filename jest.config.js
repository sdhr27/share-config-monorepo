module.exports = {
  collectCoverage: true,
  projects: [
    {
      ...require('@easymn/jest-config').jest,
      displayName: 'exercise',
      roots: ['<rootDir>/packages/exercise'],
    },
  ],
};
