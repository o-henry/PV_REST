import { format, transports, createLogger } from "winston";
import "winston-daily-rotate-file";

const { combine, timestamp, colorize, printf } = format;
const env = process.env.NODE_ENV || "development";
const logDir = "logs";

const transport = new transports.DailyRotateFile({
  filename: `${logDir}/%DATE%-results.log`,
  datePattern: "YYYY-MM-DD-HH",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
});

const logger = createLogger({
  level: env === "development" ? "debug" : "info",
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), format.json()),
  transports: [
    new transports.Console({
      level: "info",
      format: format.combine(
        colorize(),
        printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    }),
    transport,
  ],
});

export default logger;
