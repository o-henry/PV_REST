import { Type } from "class-transformer";
import { IsNotEmpty, IsUUID, ValidateNested } from "class-validator";

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

export class CreateUserBody extends BaseUser {
  @IsNotEmpty()
  public password: string;
}
