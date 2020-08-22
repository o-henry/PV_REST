import { Type } from "class-transformer";
import { IsNotEmpty, IsUUID, ValidateNested } from "class-validator";

import { User } from "@models/User";
import { FoodResponse } from "@dto/food.dto";

class BaseUser {
  @IsNotEmpty()
  public id: string;

  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public age: string;

  @IsNotEmpty()
  public gender: string;
}

export class UserResponse extends BaseUser {
  @IsUUID()
  public id: string;

  @ValidateNested({ each: true })
  @Type(() => FoodResponse)
  public foods: FoodResponse[];
}

export class CreateUser extends BaseUser {
  @IsNotEmpty()
  public password: string;

  @IsNotEmpty()
  public toEntity(): User {
    const { id, name, age, gender, password } = this;

    const user = new User();

    user.nickname = id;
    user.name = name;
    user.age = age;
    user.gender = gender;
    user.password = password;

    return user;
  }
}

export class LoginUser {
  @IsNotEmpty()
  public id: string;

  @IsNotEmpty()
  public password: string;
}
