import {
  Get,
  Post,
  Body,
  Res,
  JsonController,
  CurrentUser,
  HeaderParam,
} from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";
import { Response } from "express";

import { FoodService } from "@services/food.services";
import admin from "@providers/firebase.provider";
import { User } from "@models/User";
import { FoodResponse, CreateFood } from "@dto/food.dto";

@JsonController("/foods")
@OpenAPI({ security: [{ bearerAuth: [] }] })
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Post()
  // @ResponseSchema(FoodResponse)
  public async create(
    // @Body() food: CreateFood,
    @HeaderParam("authorization") token: string,
    // @CurrentUser({ required: true }) user: User,
    @Res() res: Response
  ) {
    console.log("@@@@@@@@@token@@@@@@@@", token);

    admin
      .auth()
      .verifyIdToken(token.split("Bearer ")[1])
      .then((decodedToken) => {
        const uid = decodedToken.uid;
        if (uid) {
          console.log("**********", uid);
          this.foodService.create(uid);
        } else {
          console.error("Login Error");
        }
      })
      .catch((error) => console.log("error", error));

    return res.status(200).send("success");
  }
}
