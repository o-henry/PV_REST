import { Food } from "@models/Food";
import { FoodRepository } from "@repositories/food.repository";

import { Response, Request } from "express";
import { Service } from "typedi";
import { getConnection } from "typeorm";

@Service()
export class FoodService {
  protected FoodRepository: FoodRepository;

  constructor() {
    this.FoodRepository = getConnection().getRepository(Food);
  }

  public async preProcess(req: Request, data: Response): Promise<void> {
    try {
    } catch (error) {}
  }

  public async create(food: Food): Promise<Food> {
    try {
      const createFood = await this.FoodRepository.save(food);
      return createFood;
    } catch (error) {}
  }
}
