import { Post, JsonController, Body, Res } from "routing-controllers";
import { Response } from "express";

import { FoodProvider } from "@providers/food.provider";
import { preprocess } from "@util/preprocessing";
import Logger from "@loaders/logger.loader";

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

    console.log(data);
    {
      if (data) {
        let convert = await preprocess(data, body.name);
        
        console.log("convert", convert);
        return res.send({ convert });
      } else {
        Logger.error("해당하는 음식을 찾지 못했습니다.");
        return res.send({ error: "Food data doesn't exist" });
      }
    }
  }
}
