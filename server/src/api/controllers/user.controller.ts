import {
  JsonController,
  Get,
  Post,
  Res,
  Body,
  HttpCode,
  CurrentUser,
  HeaderParam,
} from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";
import { Response } from "express";

import { User } from "@models/User";
import { UserService } from "@services/user.services";
import { CreateKakaoUser } from "@dto/user.dto";
import { createFBToken } from "@providers/firebase.provider";

@JsonController("/users")
@OpenAPI({ security: [{ bearerAuth: [] }] })
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @HttpCode(200)
  @ResponseSchema(User)
  public find(@CurrentUser({ required: true }) user: User) {
    return user;
  }

  @Post()
  public async createToken(
    @Body() body: CreateKakaoUser,
    @Res() res: Response
  ) {
    let token = await createFBToken(body.id, body.email, body.name);
    if (token) {
      return res.status(200).send(token);
    }
  }
}
