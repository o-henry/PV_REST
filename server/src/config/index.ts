import dotenv from "dotenv";
dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();

if (envFound.error) {
  // This error should crash whole process

  throw new Error("Couldn't find .env file  ⚠️");
}

export default {
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
    keyId: process.env.FOOD_NOURISHMENT_KEY,
    url: process.env.FOOD_URL,
    serviceId: process.env.FOOD_SERVICE_ID,
  },

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || "info",
  },

  /**
   * API configs
   */
  api: {
    prefix: "/api",
  },
};
