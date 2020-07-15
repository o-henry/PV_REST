import { Router, Request, Response, NextFunction } from "express";

import { FoodService } from "@services/food.services";
import { Food } from "@models/Food";
import Logger from "@loaders/logger";
import middlewares from "@middlewares/index";

const route = Router();

export default (app: Router) => {
  app.use(route);

  route.post(
    "/foods",
    middlewares.FoodMiddleware,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const response = res.locals.response;
        const food = new Food();
        const service = new FoodService();

        food.name = response[0].DESC_KOR;
        food.calorie = Number(response[0]["NUTR_CONT1"]);
        food.sugar = Number(response[0]["NUTR_CONT5"]);
        food.natrium = Number(response[0]["NUTR_CONT6"]);

        service.create(food);

        res.status(200).json({
          message: "Success Save Food",
        });

        next();
      } catch (error) {
        Logger.error(error);
        next(error);
      }
    }
  );
};
