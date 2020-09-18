import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";

import { Food } from "@models/Food";
import { FoodRepository } from "@repositories/food.repository";
import { CreateFood } from "@dto/food.dto";

@Service()
export class FoodService {
  constructor(@OrmRepository() private foodRepository: FoodRepository) {}

  public async create(createfood: CreateFood, userId: string): Promise<Food> {
    const food = createfood.toEntity();
    food.userId = userId;

    return await this.foodRepository.save(food);
  }

  public find(userId: string): Promise<Food[]> {
    return this.foodRepository.find({
      where: {
        userId: userId,
      },
    });
  }
}
