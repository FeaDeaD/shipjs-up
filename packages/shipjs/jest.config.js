export default {
  transform: {
    '^.+.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
