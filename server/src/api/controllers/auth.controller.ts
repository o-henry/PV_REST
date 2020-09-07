import { JsonController, Post, Res, Body, HttpCode } from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";
import { Response } from "express";

import { AuthService } from "@services/auth.services";
import { UserService } from "@services/user.services";
import { Authentication } from "@auth/Authenticate";
import { CreateUser, LoginUser, UserResponse } from "@dto/user.dto";

@JsonController("/auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  @HttpCode(200)
  @Post("/login")
  @OpenAPI({
    summary: "Login User",
    statusCode: "200",
    response: {
      "401": {
        description: "Unauthorized",
      },
    },
  })
  public async login(@Body() loginUser: LoginUser, @Res() res: Response) {
    const user = await this.authService.validateUser(loginUser);

    console.log(user);
    if (!user)
      return res
        .status(401)
        .send({ message: "유효하지 않은 사용자 이름 또는 비밀번호 입니다." });

    const accessToken = Authentication.generateToken(user.id);

    return res.status(201).json({ accessToken });
  }

  @HttpCode(200)
  @Post("/register")
  @ResponseSchema(UserResponse)
  public async create(@Body() user: CreateUser, @Res() res: Response) {
    const check = await this.userService.check(user.id);

    if (check) {
      return {
        error: true,
        message: "This ID is already registered.",
      };
    }

    const newUser = await this.userService.create(user);
    const accessToken = Authentication.generateToken(newUser.id);

    return res.status(201).json({ accessToken });
  }
}
