import { Response, Request } from "express";
import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";

import { Food } from "@models/Food";
import { FoodRepository } from "@repositories/food.repository";

@Service()
export class FoodService {
  constructor(@OrmRepository() private foodRepository: FoodRepository) {}

  public async preProcess(req: Request, data: Response): Promise<void> {
    try {
    } catch (error) {}
  }

  public async create(food: Food): Promise<Food> {
    console.log("r u in?");
    return food;
    // return await this.foodRepository.save(food);
  }
}
