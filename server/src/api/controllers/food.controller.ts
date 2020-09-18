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
import admin from "@providers/firebase.provider";
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
    let uid: string;

    await admin
      .auth()
      .verifyIdToken(token.split("Bearer ")[1])
      .then((decodedToken) => {
        uid = decodedToken.uid;
      });

    if (uid) {
      const foods = await this.foodService.find(uid);
      return res.status(200).send(foods);
    } else {
      console.error("Can't Find User");
    }
  }

  @Post()
  public async create(
    @Body() food: CreateFood,
    @Res() res: Response,
    @HeaderParam("authorization") token: string
  ) {
    console.log("********************", food);
    admin
      .auth()
      .verifyIdToken(token.split("Bearer ")[1])
      .then((decodedToken) => {
        const uid = decodedToken.uid;
        if (uid) {
          this.foodService.create(food, uid);
        } else {
          console.error("Login Error");
        }
      })
      .catch((error) => console.log("error", error));

    return res.status(200).send("success");
  }
}
