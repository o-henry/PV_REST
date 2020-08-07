import { JsonController, Post, Body } from "routing-controllers";

import { User } from "@models/User";
import { UserService } from "@services/user.services";

class BaseUser {}

@JsonController("/users")
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public async create(@Body({ required: true }) body: any): Promise<User> {
    const data = body.kakao_account;
    const user = new User();

    user.sns = body.id;
    user.name = data.profile.nickname;
    user.gender = data.gender;
    user.age = data.age_range;

    return await this.userService.create(user);
  }
}
