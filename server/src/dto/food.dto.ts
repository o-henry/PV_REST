import { IsNotEmpty, IsUUID, ValidateNested } from "class-validator";

import { Food } from "@models/Food";
import { UserResponse } from "@dto/user.dto";

class BaseFood {
  @IsNotEmpty()
  public name: string;
}

export class FoodResponse extends BaseFood {
  @IsUUID()
  public id: string;

  @ValidateNested()
  public user: UserResponse;
}

export class CrateFood extends BaseFood {
  @IsNotEmpty()
  public calorie: number;

  @IsNotEmpty()
  public sugar: number;

  @IsNotEmpty()
  public natrium: number;

  @IsNotEmpty()
  public carbohydrate!: number;
}
