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
   * @param port
   */
  port: process.env.PORT,

  /**
   * @param Typeorm db
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
   * @param food opensource
   */
  foods: {
    url: process.env.FOOD_URL,
  },

  /**
   * @param Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || "info",
  },

  /**
   * @param Kakao
   */
  kakao: {
    id: process.env.KAKAO_REST_KEY,
    redirect: process.env.KAKAO_REDIRECT,
    secret: process.env.KAKAO_SECRET,
  },

  /**
   * @param Front
   */
  endpoint: {
    redirect: process.env.FRONT_REDIRECT,
    login: process.env.FRONT_LOGIN,
  },

  /**
   * @param API configs
   */
  api: {
    versioning: "/v1",
  },
};
