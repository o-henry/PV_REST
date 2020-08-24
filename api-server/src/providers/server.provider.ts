import { BaseProvider } from "@providers/base.provider";

import config from "@config/index";

export class ServerProvider extends BaseProvider {
  constructor() {
    super();
  }

  async postFoodData(data: any, token: string) {
    this.setInstance(config.main.url, {
      Authorization: `Bearer ${token}`,
    });

    const request = await this.getInstance().post(config.main.foods, data);

    console.log("API SERVER FOOD REQUEST : ", request);

    return request.config.data;
  }
}
