import { Router, Request, Response, NextFunction } from "express";

import { UserService } from "@services/user.services";
import { User } from "@models/User";
import { Food } from "@models/Food";
import Logger from "@loaders/logger.loader";

const route = Router();

export default (app: Router) => {
  app.use(route);

  route.post(
    "/signup",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const data = req.body.kakao_account;
        const user = new User();
        const food = new Food();
        const service = new UserService();
        const exUser = await service.findOne(req.body.id);

        if (exUser) {
          return res
            .status(200)
            .json({ message: "이미 회원가입이 완료된 계정 입니다." });
        }

        user.sns = req.body.id;
        user.name = data.profile.nickname;
        user.gender = data.gender;
        user.age = data.age_range;
        user.foods = [food];

        service.create(user);

        next();
      } catch (error) {
        Logger.error(error);
        next();
      }
    }
  );
};
