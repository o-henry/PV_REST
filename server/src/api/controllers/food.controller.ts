import { Get, Post, Body, Res, JsonController } from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";

import { FoodService } from "@services/food.services";
import { FoodResponse, CreateFood } from "@dto/food.dto";

@JsonController("/foods")
@OpenAPI({ security: [{ bearerAuth: [] }] })
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Post()
  @ResponseSchema(FoodResponse)
  public async create(@Body() food: CreateFood) {
    return await this.foodService.create(food);
  }
}
