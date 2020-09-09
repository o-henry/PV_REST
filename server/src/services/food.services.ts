import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";
import { Response } from "express";
import { BadRequestError, NotFoundError } from "routing-controllers";

import { Food } from "@models/Food";
import { FoodRepository } from "@repositories/food.repository";
import { CreateFood } from "@dto/food.dto";

@Service()
export class FoodService {
  constructor(@OrmRepository() private foodRepository: FoodRepository) {}

  public async create(userId: string): Promise<Food> {
    console.log("userId", userId);
    // const food = createfood.toEntity();
    const food = new Food();
    food.userId = userId;

    return await this.foodRepository.save(food);
  }
}

// createfood: CreateFood,
