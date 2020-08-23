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
   * @param API configs
   */
  api: {
    versioning: "/v1",
  },

  /**
   * @param food opensource
   */
  foods: {
    url: process.env.FOOD_URL,
  },
};
