import { Post, JsonController, Body, Res } from "routing-controllers";
import { Response } from "express";

import { FoodProvider } from "@providers/food.provider";
import { ServerProvider } from "@providers/server.provider";
import { preprocess } from "@util/preprocessing";

@JsonController("/foods")
export class FoodController {
  @Post()
  public async create(
    @Body({ required: true }) body: any,
    @Res() res: Response
  ) {
    const xhr = new FoodProvider();
    const fetch = new ServerProvider();

    /**
     * @param filtering
     **/

    const data = await xhr.getIngredients(encodeURI(body.name));

    {
      if (data) {
        // return await fetch.postFoodData(
        //   preprocess(data, body.name),
        //   body.token
        // );
        let convert = await preprocess(data, body.name);
        return res.send({ convert });
      } else {
        return res.send({ error: "Food data doesn't exist" });
      }
    }
  }
}
