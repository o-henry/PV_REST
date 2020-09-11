import { IsNotEmpty, IsUUID, ValidateNested } from "class-validator";

import { Food } from "@models/Food";

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

export class CreateFood extends BaseFood {
  @IsNotEmpty()
  public toEntity(): Food {
    const { name, carbohydrate, natrium, sugar, calorie } = this;

    const food = new Food();

    food.name = name;
    food.calorie = calorie;
    food.sugar = sugar;
    food.natrium = natrium;
    food.carbohydrate = carbohydrate;

    return food;
  }
}
