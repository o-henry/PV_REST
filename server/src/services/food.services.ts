import { Service } from "typedi";
import { Repository } from "typeorm";
import { OrmRepository } from "typeorm-typedi-extensions";
import { BadRequestError, NotFoundError } from "routing-controllers";

import { Food } from "@models/Food";
import { User } from "@models/User";
import { FoodRepository } from "@repositories/food.repository";

@Service()
export class FoodService {
  // constructor(@OrmRepository() private foodRepository: FoodRepository) {}

  // public async create(food: Food): Promise<Food> {
  //   return await this.foodRepository.save(food);
  // }

  @OrmRepository(Food)
  private foodRepository: Repository<Food>;
  @OrmRepository(User)
  private userRepository: Repository<User>;

  public async create(food: Food): Promise<Food> {
    const user = await this.userRepository.findOne(food.user.id);

    if (!user) {
      throw new NotFoundError("user is not found");
    }

    return this.foodRepository.save(food);
  }
}
