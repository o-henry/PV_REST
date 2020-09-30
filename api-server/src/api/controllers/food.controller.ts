import { Post, JsonController, Body, Res } from "routing-controllers";
import { Response } from "express";

import { FoodProvider } from "@providers/food.provider";
import { preprocess } from "@util/preprocessing";

@JsonController("/foods")
export class FoodController {
  @Post()
  public async create(
    @Body({ required: true }) body: any,
    @Res() res: Response
  ) {
    const xhr = new FoodProvider();

    /**
     * @param filtering
     **/

    const data = await xhr.getIngredients(encodeURI(body.name));
    // console.log("@@@@@@@api@@@@@@@@", data);
    {
      if (data) {
        let convert = await preprocess(data, body.name);
        return res.send({ convert });
      } else {
        return res.send({ error: "Food data doesn't exist" });
      }
    }
  }
}
