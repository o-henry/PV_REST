import { Service } from "typedi";
import { Response, Request } from "express";
import { OrmRepository } from "typeorm-typedi-extensions";

import { Food } from "@models/Food";
import { FoodRepository } from "@repositories/food.repository";

@Service()
export class FoodService {
  constructor(@OrmRepository() private foodRepository: FoodRepository) {}

  public async create(food: Food): Promise<Food> {
    return await this.foodRepository.save(food);
  }
}
