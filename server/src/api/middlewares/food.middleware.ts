import { Request, Response, NextFunction } from "express";

import { FoodProvider } from "@providers/food.provider";
import { FoodService } from "@services/FoodService";
import { Food } from "@models/Food";
import Logger from "@loaders/logger";

const FoodMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const xhr = new FoodProvider();

  try {
    const response = await xhr.getIngredients(encodeURI(req.body.name));
    const food = new Food();

    console.log("=>=>=>=>=>", response, response[0], response[0]["NUTR_CONT1"]);

    food.name = req.body.name;
    food.calorie = Number(response[0]["NUTR_CONT1"]);
  } catch (error) {
    Logger.error(error);
  }

  next();
};

export default FoodMiddleware;
