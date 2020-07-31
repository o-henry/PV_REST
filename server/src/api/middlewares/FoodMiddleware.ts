import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import { Request, Response, NextFunction } from "express";

import { FoodProvider } from "@providers/food.provider";
import Logger from "@loaders/logger.loader";

@Middleware({ type: "before" })
export class FoodMiddleware implements ExpressMiddlewareInterface {
  public async use(req: Request, res: Response, next: NextFunction) {
    const xhr = new FoodProvider();
    try {
      const response = await xhr.getIngredients(encodeURI(req.body.name));
      res.locals.response = response;
      next();
    } catch (error) {
      Logger.error(error);
      next(error);
    }
  }
}
