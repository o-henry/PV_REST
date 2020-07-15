import { Router, Request, Response, NextFunction } from "express";
import Logger from "@loaders/logger";
import middlewares from "@middlewares/index";

const route = Router();

/**
 * @param {GET} : fetch To Food DB
 */

export default (app: Router) => {
  app.use(route);

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
