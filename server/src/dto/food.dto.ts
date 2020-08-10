import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsUUID,
  ValidateNested,
} from "class-validator";

import { UserResponse } from "@dto/user.dto";

class BaseFood {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsNumber()
  public calorie: number;

  @IsNotEmpty()
  @IsNumber()
  public sugar: number;

  @IsNotEmpty()
  @IsNumber()
  public natrium: number;

  @IsNotEmpty()
  @IsNumber()
  public carbohydrate: number;
}

export class FoodResponse extends BaseFood {
  @IsUUID()
  public id: string;

  @ValidateNested()
  public user: UserResponse;
}

export class CreateFoodBody extends BaseFood {
  @IsUUID()
  public userId: string;
}
