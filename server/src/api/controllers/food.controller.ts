import { Get, Post, Body, Res, JsonController } from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";
import { Inject } from "typedi";

import { Food } from "@models/Food";
import { FoodService } from "@services/food.services";
import { FoodProvider } from "@providers/food.provider";
import { FoodResponse } from "@dto/food.dto";

@JsonController("/foods")
@OpenAPI({ security: [{ bearerAuth: [] }] })
export class FoodController {
  @Inject()
  foodService: FoodService;

  @Post()
  @ResponseSchema(FoodResponse)
  public async create(@Body({ required: true }) body: any): Promise<Food> {
    const food = new Food();

    //json.parse 필요
    console.log("body", body);
    return this.foodService.create(food);
  }
}
