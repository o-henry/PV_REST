import {
  Get,
  JsonController,
  Post,
  Req,
  Res,
  HttpCode,
} from "routing-controllers";

import { Food } from "@models/Food";
import { FoodService } from "@services/food.services";

@JsonController()
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Get("/foods")
  check(@Res() response: any) {
    return response.send("Healthy Check");
  }

  @Post("/foods")
  public create(@Res() res: any) {
    const data = res.locals.response;
    const food = new Food();

    console.log(typeof data[0]["NUTR_CONT1"]);

    food.name = data[0].DESC_KOR;
    food.calorie = Number(data[0]["NUTR_CONT1"]);
    food.sugar = Number(data[0]["NUTR_CONT5"]);
    food.natrium = Number(data[0]["NUTR_CONT6"]);
    food.carbohydrate = Number(data[0]["NUTR_CONT2"]);

    return this.foodService.create(food);
  }
}
