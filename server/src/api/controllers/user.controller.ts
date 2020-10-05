import {
  JsonController,
  Get,
  Post,
  Delete,
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
import { createFBToken, DelUser } from "@providers/firebase.provider";
import Logger from "@loaders/logger.loader";

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

  @Delete()
  public async delete(
    @HeaderParam("authorization") id: string,
    @Res() res: Response
  ) {
    Logger.info("계정이 삭제되었습니다.");

    const del = await DelUser(id);
    return res.status(200).send(del);
  }
}
