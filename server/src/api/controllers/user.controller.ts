import { Router, Request, Response, NextFunction } from "express";

import { UserService } from "@services/user.services";
import { User } from "@models/User";
import Logger from "@loaders/logger.loader";

const route = Router();

export default (app: Router) => {
  app.use(route);

  route.post(
    "/signup",
    async (req: Request, res: Response, next: NextFunction) => {
      console.log("********** USER INFO **********", req.body);
      const user = new User();
      const service = new UserService();

      if (service.findOne({ id: req.body.id, provider: req.body.provider })) {
        return res.redirect("/");
      }

      // user.sns;
      // user.name;
      // user.gender;
      // user.age;
      // user.provider;
    }
  );
};
