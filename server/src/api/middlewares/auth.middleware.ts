import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { User } from "@models/User";
import config from "@config/index";

export class Authentication {
  static verifyToken(res: Response, token: string) {
    try {
      const data = jwt.verify(token, config.jwt.secret, {
        algorithms: ["HS512"],
      });

      return data;
    } catch (error) {
      if (error.name === "TokenExpireError") {
        return res.status(419).json({
          code: 419,
          message: "토큰이 만료되었습니다.",
        });
      }
      return res.status(401).json({
        code: 401,
        message: "유효하지 않은 토큰입니다.",
      });
    }
  }
}
