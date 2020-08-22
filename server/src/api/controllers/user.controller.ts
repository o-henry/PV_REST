import { JsonController, Post, Body, Get, Res, Req } from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";
import { Inject } from "typedi";

import { User } from "@models/User";
import { UserService } from "@services/user.services";
import { CreateUserBody, UserResponse } from "@dto/user.dto";

@JsonController("/users")
@OpenAPI({ security: [{ bearerAuth: [] }] })
export class UserController {
  @Inject()
  userService: UserService;

  @Post()
  @ResponseSchema(UserResponse)
  public create(@Body() body: CreateUserBody): Promise<User> {
    const user = new User();

    user.username = body.id;
    user.name = body.name;
    user.age = body.age;
    user.gender = body.gender;
    user.password = body.password;

    return this.userService.create(user);
  }
}
