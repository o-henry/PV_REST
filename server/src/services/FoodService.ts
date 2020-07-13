import { Service } from "typedi";
import { Food } from "@models/Food";

@Service()
export class FoodService {
  public async create(food: Food): Promise<Food> {
    return;
  }
}
