import { BaseProvider } from "@providers/base.provider";

import config from "@config/index";

export class ServerProvider extends BaseProvider {
  constructor() {
    super();
  }

  async postFoodData(data: any) {
    this.setInstance(config.main.url);

    const request = await this.getInstance().post(config.main.foods, data);

    console.log("API SERVER FOOD REQUEST : ", request.config.data);

    return request.config.data;
  }
}
