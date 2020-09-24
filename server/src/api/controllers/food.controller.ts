import {
  Post,
  Get,
  Body,
  Res,
  JsonController,
  HeaderParam,
} from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { Response } from "express";

import { FoodService } from "@services/food.services";
import { Auth } from "@providers/firebase.provider";
import { CreateFood } from "@dto/food.dto";

@JsonController("/foods")
@OpenAPI({ security: [{ bearerAuth: [] }] })
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Get()
  public async find(
    @HeaderParam("authorization") token: string,
    @Res() res: Response
  ) {
    const id = await Auth(token);

    if (id) {
      const foods = await this.foodService.find(id);
      console.log("==== EAT : ", foods);
      return res.status(200).send(foods);
    } else {
      console.error("Can't Find User");
    }
  }

  @Get("/:day")
  public async findByDay(
    @HeaderParam("authorization") token: string,
    @Res() res: Response
  ) {
    const id = await Auth(token);

    if (id) {
      const foods = await this.foodService.findByDay(id);
      return res.status(200).send(foods);
    } else {
      console.error("Can't find User");
    }
  }

  @Post()
  public async create(
    @Body() food: CreateFood,
    @Res() res: Response,
    @HeaderParam("authorization") token: string
  ) {
    console.log("********************", food);
    const id = await Auth(token);

    if (id) {
      await this.foodService.create(food, id);
    } else {
      console.error("Login Error");
    }

    return res.status(200).send("success");
  }
}
