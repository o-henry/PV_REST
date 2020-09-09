import { IsNotEmpty, IsUUID, ValidateNested } from "class-validator";

import { Food } from "@models/Food";
import { UserResponse } from "@dto/user.dto";

class BaseFood {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public calorie: number | undefined;

  @IsNotEmpty()
  public sugar: number | undefined;

  @IsNotEmpty()
  public natrium: number | undefined;

  @IsNotEmpty()
  public carbohydrate!: number | undefined;
}

export class FoodResponse extends BaseFood {
  @IsUUID()
  public id: string;

  @ValidateNested()
  public user: UserResponse;
}

export class CreateFood extends BaseFood {
  @IsNotEmpty()
  public toEntity(): Food {
    const food = new Food();

    // food.name = name;
    // food.calorie = calorie;
    // food.sugar = sugar;
    // food.natrium = natrium;
    // food.carbohydrate = carbohydrate;

    return food;
  }
}
