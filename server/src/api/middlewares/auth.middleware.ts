import {
  ExpressMiddlewareInterface,
  Middleware,
  Req,
  Res,
} from "routing-controllers";
import { Request, Response, NextFunction } from "express";
import { Authentication } from "auth/Authenticate";

@Middleware({ type: "before" })
export class AuthMiddleware implements ExpressMiddlewareInterface {
  constructor() {}

  use(@Req() request: Request, @Res() response: Response, next: NextFunction) {
    const jwt: string = request.headers.authorization as string;

    // if (jwt !== undefined) {
    //   const bearerToken = jwt.replace(/Bearer\s/, "");
    //   const token = Authentication.refreshToken(bearerToken);
    //   response.setHeader("authorization", `Bearer ${token}`);
    // }

    next();
  }
}
