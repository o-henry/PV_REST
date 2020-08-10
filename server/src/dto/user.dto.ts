import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsUUID,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

import { FoodResponse } from "@dto/food.dto";

class BaseUser {
  @IsNotEmpty()
  @IsNumber()
  public sns: number;

  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public gender: string;

  @IsNotEmpty()
  @IsNumber()
  public age: number;
}

export class UserResponse extends BaseUser {
  @IsUUID()
  public id: string;

  @ValidateNested({ each: true })
  @Type(() => FoodResponse)
  public foods: FoodResponse[];
}

export class CreateUserBody extends BaseUser {}
