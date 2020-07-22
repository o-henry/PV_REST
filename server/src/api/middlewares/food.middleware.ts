import { Request, Response, NextFunction } from "express";

import { FoodProvider } from "@providers/food.provider";
import Logger from "@loaders/logger.loader";

const FoodMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const xhr = new FoodProvider();

  try {
    const response = await xhr.getIngredients(encodeURI(req.body.name));
    res.locals.response = response;
    next();
  } catch (error) {
    Logger.error(error);
    next(error);
  }
};

export default FoodMiddleware;
