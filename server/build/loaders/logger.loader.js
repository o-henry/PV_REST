"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
require("winston-daily-rotate-file");
const index_1 = __importDefault(require("@config/index"));
const { combine, timestamp, colorize, printf } = winston_1.format;
const logDir = "logs";
const transport = new winston_1.transports.DailyRotateFile({
    filename: `${logDir}/%DATE%-results.log`,
    datePattern: "YYYY-MM-DD-HH",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
});
const logger = winston_1.createLogger({
    level: index_1.default.logs.level,
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston_1.format.json()),
    transports: [
        new winston_1.transports.Console({
            level: "info",
            format: winston_1.format.combine(colorize(), printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)),
        }),
        transport,
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.loader.js.map