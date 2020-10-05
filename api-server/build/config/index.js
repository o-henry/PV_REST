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
    throw new Error("Couldn't find .env file  ⚠️");
}
exports.default = {
    /**
     * @param port
     */
    port: process.env.PORT,
    /**
     * @param API configs
     */
    api: {
        versioning: "/v1",
    },
    logs: {
        level: process.env.LOG_LEVEL || "info",
    },
    /**
     * @param food opensource
     */
    foods: {
        url: process.env.FOOD_URL,
    },
    /**
     * @param main api
     */
    main: {
        url: process.env.MAIN_SERVER,
        foods: process.env.FOOD_ENDPOINT,
    },
};
//# sourceMappingURL=index.js.map