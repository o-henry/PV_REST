module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  roots: ["<rootDir>", "src/", "<rootDir>/src"],
  moduleNameMapper: {
    "@root/(.*)": "<rootDir>/$1",
    "@config/(.*)": "<rootDir>/src/config/$1",
    "@controllers/(.*)": "<rootDir>/src/api/controllers/$1",
    "@lib/(.*)": "<rootDir>/src/lib/$1",
    "@api/(.*)": "<rootDir>/src/api/$1",
    "@services/(.*)": "<rootDir>/services/$1",
    "@interface/(.*)": "<rootDir>/src/interface/$1",
    "@models/(.*)": "<rootDir>/src/models/$1",
    "@providers/(.*)": "<rootDir>/src/providers/$1",
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: [
    // '**/?(*.)+(spec|test).js?(x)',
    "**/?(*.)+(spec|test).ts?(x)",
  ],
  testEnvironment: "node",
};
