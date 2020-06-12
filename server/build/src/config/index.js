"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
process.env.NODE_ENV = process.env.NODE_ENV || "development";
const envFound = dotenv_1.default.config();
if (envFound.error) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
exports.default = {
    /**
     * Your favorite port
     */
    port: process.env.PORT,
    /**
     * Typeorm db
     */
    typeorm: {
        connection: process.env.TYPEORM_CONNECTION,
        host: process.env.TYPEORM_HOST,
        port: process.env.TYPEORM_PORT,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
    },
    /**
     * food opensource
     */
    foods: {
        key: process.env.FOOD_NOURISHMENT_KEY,
        url: process.env.FOOD_URL,
    },
    /**
     * Used by winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || "silly",
    },
    /**
     * API configs
     */
    api: {
        prefix: "/api",
    },
};
