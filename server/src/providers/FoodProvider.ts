import { BaseProvider } from "@providers/BaseProvider";
import config from "@config/index";
import { Service } from "typedi";

@Service()
export class FoodProvider extends BaseProvider {
  constructor() {
    super();
  }

  async getFoodData(query: string) {
    this.setInstance(config.foods.url, {});

    const response = await this.getInstance()?.get(
      `/xml/1/5/DESC_KOR=${query}`
    );

    console.log("response Food API", response);

    return response?.data;
  }
}
