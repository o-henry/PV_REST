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
    url: process.env.FOOD_URL,
  },

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || "info",
  },

  /**
   * Swagger
   */
  swagger: {
    name: process.env.DOCS_NAME,
    version: process.env.DOCS_VERSION,
    description: process.env.DOCS_DESCRIPTION,
    host: process.env.DOCS_HOST,
  },

  /**
   * API configs
   */
  api: {
    prefix: "/api",
    versioning: "/v1",
  },
};
