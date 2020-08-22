import { IsNotEmpty, IsNumber, IsUUID, ValidateNested } from "class-validator";

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
