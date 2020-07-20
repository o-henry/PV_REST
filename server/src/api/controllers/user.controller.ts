import { Router, Request, Response, NextFunction } from "express";

import { UserService } from "@services/user.services";
import { User } from "@models/User";
import Logger from "@loaders/logger";

const route = Router();

export default (app: Router) => {
  app.use(route);

  route.get(
    "/login",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
      } catch (error) {
        Logger.error(error);
      }
    }
  );
};
