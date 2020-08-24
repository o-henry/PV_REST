import { Get, Post, Body, Res, JsonController } from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";
import { Response } from "express";

import { FoodService } from "@services/food.services";
import { FoodResponse, CreateFood } from "@dto/food.dto";

@JsonController("/foods")
@OpenAPI({ security: [{ bearerAuth: [] }] })
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Post()
  @ResponseSchema(FoodResponse)
  public async create(@Body() food: CreateFood, @Res() res: Response) {
    // console.log("fffff", food);
    // await this.foodService.create(food, res.locals.userId);
    return res.send("success");
  }
}
