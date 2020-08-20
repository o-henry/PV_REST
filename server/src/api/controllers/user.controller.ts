import { JsonController, Post, Body, Get, Res, Req } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { Inject } from "typedi";

import { User } from "@models/User";
import { UserService } from "@services/user.services";

@JsonController("/users")
@OpenAPI({ security: [{ bearerAuth: [] }] })
export class UserController {
  @Inject()
  userService: UserService;
}
