export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEach: [],
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
};
