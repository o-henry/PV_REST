import { Router, Request, Response, ErrorRequestHandler } from "express";
import middlewares from "@middlewares/index";
import Logger from "@loaders/logger";

const route = Router();

/**
 * @param GET /
 * fetch To Food DB
 */

export default (app: Router) => {
  app.use(route);

  route.get(
    "/foods",
    middlewares.getFood,
    async (req: Request, res: Response, error: ErrorRequestHandler) => {
      if (error) {
        Logger.error(error);
      }
      return res.status(200).send("Connect on FOOD OPEN API");
    }
  );

  route.post(
    "/foods",
    async (req: Request, res: Response, error: ErrorRequestHandler) => {
      if (error) {
        Logger.error(error);
      }
      return res.status(200).json({
        message: "Success Save Food",
      });
    }
  );
};
