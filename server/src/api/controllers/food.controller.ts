import { Router, Request, Response, NextFunction } from "express";
import Logger from "@loaders/logger";
import middlewares from "@middlewares/index";

import { FoodProvider } from "@providers/food.provider";

const route = Router();

/**
 * @param {GET} : fetch To Food DB
 */

export default (app: Router) => {
  app.use(route);
  const xhr = new FoodProvider();

  route.post(
    "/foods",
    middlewares.FoodMiddleware,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        return res.status(200).json({
          message: "Success Save Food",
        });
      } catch (error) {
        Logger.error(error);
        return next(error);
      }
    }
  );
};
