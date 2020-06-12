"use strict";
module.exports = {
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json",
        },
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
