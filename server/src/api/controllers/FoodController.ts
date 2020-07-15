import { FoodService } from "@services/food.services";
import { Food } from "@models/Food";
import { FoodMiddleware } from "@middlewares/FoodMiddleware";

import { JsonController, UseBefore, Post } from "routing-controllers";
import Container from "typedi";

@JsonController("/foods")
export class FoodController {
  res: typeof FoodMiddleware;
  constructor(private foodService: FoodService) {
    this.res = FoodMiddleware;

    console.log("-------INCONTROLLER", this.res);
  }

  @Post()
  public create(): Promise<Food> {
    // const food = new Food();
    // food.name = response[0].DESC_KOR;
    // food.calorie = Number(response[0]["NUTR_CONT1"]);
    // food.sugar = Number(response[0]["NUTR_CONT5"]);
    // food.natrium = Number(response[0]["NUTR_CONT6"]);
    // return this.foodService.create(food);
    return;
  }
}
