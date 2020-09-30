import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";
import { getDay, format } from "date-fns";

import { Food } from "@models/Food";
import {
  FoodRepository,
  BeforeDate,
  AfterDate,
} from "@repositories/food.repository";
import { CreateFood } from "@dto/food.dto";

@Service()
export class FoodService {
  constructor(@OrmRepository() private foodRepository: FoodRepository) {}

  public async create(createfood: CreateFood, userId: string): Promise<Food> {
    const food = createfood.toEntity();
    food.userId = userId;
    food.date = getDay(new Date());

    return await this.foodRepository.save(food);
  }

  public async find(userId: string): Promise<Food[]> {
    // date별로 sorting 해야함
    return await this.foodRepository.find({
      where: {
        userId: userId,
        createdDate: BeforeDate(new Date()),
      },
    });
  }

  public async findByDay(userId: string): Promise<Food[]> {
    return await this.foodRepository.find({
      where: {
        userId: userId,
        createdDate: AfterDate(new Date()),
      },
    });
  }

  public async delete(id: string): Promise<void> {
    await this.foodRepository.delete(id);
    return;
  }
}
