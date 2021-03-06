import {
  Post,
  Get,
  Body,
  Delete,
  Res,
  Param,
  JsonController,
  HeaderParam,
} from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { Response } from "express";

import { FoodService } from "@services/food.services";
import Logger from "@loaders/logger.loader";
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
      return res.status(200).send(foods);
    } else {
      Logger.error("Can't Find User");
    }
  }

  @Get("/day")
  public async findByDay(
    @HeaderParam("authorization") token: string,
    @Res() res: Response
  ) {
    const id = await Auth(token);

    if (id) {
      const foods = await this.foodService.findByDay(id);
      return res.status(200).send(foods);
    } else {
      Logger.error("Can't find User");
    }
  }

  @Get("/:name")
  public async findOne(
    @HeaderParam("authorization") token: string,
    @Param("name") name: string,
    @Res() res: Response
  ) {
    const id = await Auth(token);

    if (id) {
      const food = await this.foodService.findOneByName(name, id);
      return res.status(200).send(food);
    } else {
      Logger.error("Can't find Id");
    }
  }

  @Post()
  public async create(
    @Body() food: CreateFood,
    @Res() res: Response,
    @HeaderParam("authorization") token: string
  ) {
    const id = await Auth(token);

    if (id) {
      await this.foodService.create(food, id);
    } else {
      Logger.error("Login Error");
    }

    return res.status(200).send("success");
  }

  @Get("/day/:id")
  public async findOneById(
    @HeaderParam("authorization") token: string,
    @Param("id") foodId: string,
    @Res() res: Response
  ) {
    const id = await Auth(token);

    if (id) {
      const food = await this.foodService.findOneById(foodId, id);
      return res.status(200).send(food);
    } else {
      Logger.error("Can't find Id");
    }
  }

  @Delete("/:id")
  public async delete(
    @HeaderParam("authorization") token: string,
    @Param("id") foodId: string,
    @Res() res: Response
  ) {
    const id = await Auth(token);

    if (id) {
      await this.foodService.delete(foodId, id);
    } else {
      Logger.error("Can't find Id");
    }

    return res.status(200).send("success delete");
  }
}
