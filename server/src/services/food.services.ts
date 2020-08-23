import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";
import { BadRequestError, NotFoundError } from "routing-controllers";

import { Food } from "@models/Food";
import { FoodRepository } from "@repositories/food.repository";
import { CreateFood } from "@dto/food.dto";

@Service()
export class FoodService {
  constructor(@OrmRepository() private foodRepository: FoodRepository) {}

  public async create(createfood: CreateFood): Promise<Food> {
    const food = createfood.toEntity();
    return await this.foodRepository.save(food);
  }
}
