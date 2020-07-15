import { Food } from "@models/Food";
import { FoodRepository } from "@repositories/food.repository";

import { Service } from "typedi";

@Service()
export class FoodService {
  constructor(private FoodRepository: FoodRepository) {}

  public async create(food: Food): Promise<Food> {
    const createFood = await this.FoodRepository.save(food);
    return createFood;
  }
}
