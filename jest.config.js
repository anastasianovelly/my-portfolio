module.exports = {
  // ...existing jest configuration...
  moduleNameMapper: {
    '^react-router-dom$': '<rootDir>/src/__mocks__/react-router-dom.js',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
