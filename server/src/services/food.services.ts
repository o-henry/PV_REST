import { Food } from "@models/Food";
import { FoodRepository } from "@repositories/food.repository";

import { Service } from "typedi";
import { getConnection } from "typeorm";

@Service()
export class FoodService {
  protected FoodRepository: FoodRepository;

  constructor() {
    this.FoodRepository = getConnection().getRepository(Food);
  }

  public async create(food: Food): Promise<Food> {
    const createFood = await this.FoodRepository.save(food);
    return createFood;
  }
}
