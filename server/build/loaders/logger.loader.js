"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
require("winston-daily-rotate-file");
var index_1 = __importDefault(require("@config/index"));
var combine = winston_1.format.combine, timestamp = winston_1.format.timestamp, colorize = winston_1.format.colorize, printf = winston_1.format.printf;
var logDir = "logs";
var transport = new winston_1.transports.DailyRotateFile({
    filename: logDir + "/%DATE%-results.log",
    datePattern: "YYYY-MM-DD-HH",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
});
var logger = winston_1.createLogger({
    level: index_1.default.logs.level,
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston_1.format.json()),
    transports: [
        new winston_1.transports.Console({
            level: "info",
            format: winston_1.format.combine(colorize(), printf(function (info) { return info.timestamp + " " + info.level + ": " + info.message; })),
        }),
        transport,
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.loader.js.map