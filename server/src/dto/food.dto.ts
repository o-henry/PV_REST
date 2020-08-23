import { IsNotEmpty, IsUUID, ValidateNested } from "class-validator";

import { Food } from "@models/Food";
import { UserResponse } from "@dto/user.dto";

class BaseFood {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public calorie: number;

  @IsNotEmpty()
  public sugar: number;

  @IsNotEmpty()
  public natrium: number;

  @IsNotEmpty()
  public carbohydrate!: number;
}

export class FoodResponse extends BaseFood {
  @IsUUID()
  public id: string;

  @ValidateNested()
  public user: UserResponse;
}

export class CreateFood extends BaseFood {
  @IsUUID()
  public userId: string;

  @IsNotEmpty()
  public toEntity(): Food {
    const { userId, name, calorie, sugar, natrium, carbohydrate } = this;

    const food = new Food();

    food.name = name;
    food.calorie = calorie;
    food.sugar = sugar;
    food.natrium = natrium;
    food.carbohydrate = carbohydrate;
    food.userId = userId;

    return food;
  }
}
