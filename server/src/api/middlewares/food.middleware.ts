import { Request, Response, NextFunction } from "express";

import { FoodProvider } from "@providers/food.provider";
import { FoodService } from "@services/food.services";
import { Food } from "@models/Food";
import Logger from "@loaders/logger";

const FoodMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const xhr = new FoodProvider();
  const service = new FoodService();

  try {
    const response = await xhr.getIngredients(encodeURI(req.body.name));

    // console.log("=>=>=>=>=>", response, response[0], response[0]["NUTR_CONT1"]);

    const food = new Food();

    food.name = response[0].DESC_KOR;
    food.calorie = Number(response[0]["NUTR_CONT1"]);
    food.sugar = Number(response[0]["NUTR_CONT5"]);
    food.natrium = Number(response[0]["NUTR_CONT6"]);

    return service.create(food);
  } catch (error) {
    Logger.error(error);
  }

  next();
};

export default FoodMiddleware;
