import { Get, Post, Body, Res, JsonController } from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";

import { Food } from "@models/Food";
import { FoodService } from "@services/food.services";
import { FoodProvider } from "@providers/food.provider";
import { FoodResponse, CreateFoodBody } from "@dto/food.dto";

@JsonController("/foods")
@OpenAPI({ security: [{ bearerAuth: [] }] })
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Post()
  @ResponseSchema(FoodResponse)
  public async create(@Body({ required: true }) body: any): Promise<Food> {
    console.log("Response", FoodResponse);
    const food = new Food();
    const xhr = new FoodProvider();
    const data = await xhr.getIngredients(encodeURI(body.name));

    food.name = data[0].DESC_KOR;
    food.calorie = Number(data[0]["NUTR_CONT1"]);
    food.sugar = Number(data[0]["NUTR_CONT5"]);
    food.natrium = Number(data[0]["NUTR_CONT6"]);
    food.carbohydrate = Number(data[0]["NUTR_CONT2"]);

    return this.foodService.create(food);
  }
}
