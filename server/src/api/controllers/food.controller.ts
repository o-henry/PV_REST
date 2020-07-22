import { Router, Request, Response, NextFunction } from "express";

import { FoodService } from "@services/food.services";
import { Food } from "@models/Food";
import Logger from "@loaders/logger.loader";
import middlewares from "@middlewares/index";

const route = Router();

export default (app: Router) => {
  app.use(route);

  route.post(
    "/foods",
    middlewares.FoodMiddleware,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const data = res.locals.response;
        const food = new Food();
        const service = new FoodService();

        // mapping 후, req.body.name 과 DESC_KOR 같은 값을 sorting 후 저장.
        food.name = data[0].DESC_KOR;
        food.calorie = Number(data[0]["NUTR_CONT1"]);
        food.sugar = Number(data[0]["NUTR_CONT5"]);
        food.natrium = Number(data[0]["NUTR_CONT6"]);
        food.carbohydrate = Number(data[0]["NUTR_CONT2"]);

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
