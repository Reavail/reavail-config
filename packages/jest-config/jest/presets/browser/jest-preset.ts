import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['<rootDir>'],
  transform: {
    '.(ts|tsx)$': 'ts-jest',
    '.(js|jsx)$': 'babel-jest',
  },
  passWithNoTests: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['@reavail/jest-config/dist/configs/jest.setup.js'],
  coverageDirectory: '<rootDir>/coverage/',
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: [
    '<rootDir>/test/__fixtures__',
    '<rootDir>/node_modules',
    '<rootDir>/dist',
  ],
  preset: 'ts-jest',
}

export default config
