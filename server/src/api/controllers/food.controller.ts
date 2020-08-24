import {
  Get,
  Post,
  Body,
  Res,
  JsonController,
  CurrentUser,
} from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";
import { Response } from "express";

import { FoodService } from "@services/food.services";
import { User } from "@models/User";
import { FoodResponse, CreateFood } from "@dto/food.dto";

@JsonController("/foods")
@OpenAPI({ security: [{ bearerAuth: [] }] })
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Post()
  @ResponseSchema(FoodResponse)
  public async create(
    @Body() food: CreateFood,
    @CurrentUser({ required: true }) user: User,
    @Res() res: Response
  ) {
    try {
      console.log("fffff", user, food, user.id, typeof user.id);
      await this.foodService.create(food, user.id);
    } catch (e) {
      console.log("errrrrrrrrrrr", e);
    }

    return res.send("success");
  }
}
