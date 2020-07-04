import { format, transports, createLogger } from "winston";

const { combine, timestamp } = format;

const logger = createLogger({
  level: "info",
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), format.json()),
  transports: [
    new transports.File({ filename: "./src/logs/combined.log" }),
    new transports.File({ filename: "./src/logs/error.log", level: "error" }),
    new transports.Console(),
  ],
});

export default logger;
