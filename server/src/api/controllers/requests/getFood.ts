import { FoodProvider } from "@providers/FoodProvider";
import Logger from "@loaders/logger";

const getFood = async (query: string) => {
  const xhr = new FoodProvider();

  try {
    await xhr.getFoodData(query);
  } catch (error) {
    Logger.error(" error : ", error);
  }
};

export default getFood;
