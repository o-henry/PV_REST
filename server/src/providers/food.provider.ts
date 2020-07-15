import { BaseProvider } from "@providers/base.provider";
import config from "@config/index";

import { Service } from "typedi";

@Service()
export class FoodProvider extends BaseProvider {
  constructor() {
    super();
  }

  async getIngredients(query: string) {
    this.setInstance(config.foods.url, {});

    const response = await this.getInstance()?.get(
      `/json/1/10/DESC_KOR=${query}`
    );

    return response?.data.I2790.row;
  }
}
