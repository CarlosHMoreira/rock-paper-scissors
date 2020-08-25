module.exports = {
  preset: 'ts-jest',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '/src/*/.*\\.test.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>.jest/setupTests.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['/src/**/*.{ts,tsx}', '!\\.jest/api/api-test-helpers.ts']
};