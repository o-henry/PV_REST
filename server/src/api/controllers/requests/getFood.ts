import { fetchFood } from "@lib/axios";
import Logger from "@loaders/logger";

const getFood = async (query: string) => {
  console.log("query-----", query);
  try {
    const response = await fetchFood.get(`/xml/1/5/DESC_KOR=${query}`);
    console.log("response to food API", response);
    return response;
  } catch (error) {
    Logger.error(" error : ", error);
  }
};

export default getFood;
