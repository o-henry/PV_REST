import { format, transports, createLogger } from "winston";
import "winston-daily-rotate-file";
import config from "@config/index";

const { combine, timestamp, colorize, printf } = format;

const logDir = "logs";

const transport = new transports.DailyRotateFile({
  filename: `${logDir}/%DATE%-results.log`,
  datePattern: "YYYY-MM-DD-HH",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
});

const logger = createLogger({
  level: config.logs.level,
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
