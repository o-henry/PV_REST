import { BaseProvider } from "@providers/base.provider";
import config from "@config/index";

import { Service } from "typedi";
import { handler } from "@util/queryhandler";

@Service()
export class FoodProvider extends BaseProvider {
  constructor() {
    super();
  }

  async getIngredients(query: string) {
    this.setInstance(config.foods.url, {});

    console.log("사용자가 한 말: ", query);

    let convert = handler(query);

    const response = await this.getInstance()?.get(
      `/json/1/500/DESC_KOR=${convert}`
    );

    return response?.data.I2790.row;
  }
}
