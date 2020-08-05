import { Response } from "express";
import { Get, Post, Body, Res, JsonController } from "routing-controllers";

import { Food } from "@models/Food";
import { FoodService } from "@services/food.services";
import { FoodProvider } from "@providers/food.provider";

@JsonController("/foods")
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Post()
  public async create(@Body({ required: true }) body: any): Promise<Food> {
    const food = new Food();
    const xhr = new FoodProvider();
    const data = await xhr.getIngredients(encodeURI(body.name));

    food.name = data[0].DESC_KOR;
    food.calorie = Number(data[0]["NUTR_CONT1"]);
    food.sugar = Number(data[0]["NUTR_CONT5"]);
    food.natrium = Number(data[0]["NUTR_CONT6"]);
    food.carbohydrate = Number(data[0]["NUTR_CONT2"]);
    food.userId = "aaa";

    console.log("food", food);

    return await this.foodService.create(food);
  }
}
