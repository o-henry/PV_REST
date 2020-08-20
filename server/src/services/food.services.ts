import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";
import { BadRequestError, NotFoundError } from "routing-controllers";

import { Food } from "@models/Food";
import { FoodRepository } from "@repositories/food.repository";

@Service()
export class FoodService {
  @OrmRepository()
  private foodRepository: FoodRepository;

  public async create(food: Food): Promise<Food> {
    return await this.foodRepository.save(food);
  }
}
