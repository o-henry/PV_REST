import { Router, Request, Response, NextFunction } from "express";
import passport from "passport";

import { UserService } from "@services/user.services";
import { User } from "@models/User";
import Logger from "@loaders/logger";

const route = Router();

export default (app: Router) => {
  app.use(route);

  route.get(
    "/login",
    passport.authenticate("kakao", {
      failureRedirect: "/",
    }),
    (req: Request, res: Response, next: NextFunction) => {
      res.redirect("/");
    }
  );
};
