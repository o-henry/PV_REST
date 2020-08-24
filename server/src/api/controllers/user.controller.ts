import {
  JsonController,
  Get,
  HttpCode,
  CurrentUser,
} from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";

import { User } from "@models/User";
import { UserService } from "@services/user.services";

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
}
