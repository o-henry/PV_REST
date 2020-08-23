import { Post, JsonController, Body } from "routing-controllers";

import { FoodProvider } from "@providers/food.provider";
import { ServerProvider } from "@providers/server.provider";
import { preprocess } from "@util/preprocessing";

@JsonController("/foods")
export class FoodController {
  @Post()
  public async create(@Body({ required: true }) body: any) {
    const xhr = new FoodProvider();
    const fetch = new ServerProvider();

    /**
     * @param filtering
     **/

    const data = await xhr.getIngredients(encodeURI(body.name));

    {
      if (data) {
        return await fetch.postFoodData(preprocess(data, body.name));
      }
    }
  }
}
