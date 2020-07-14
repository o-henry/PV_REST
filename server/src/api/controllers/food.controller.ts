import { FoodService } from "@services/FoodService";
import { Food } from "@models/Food"
import { Post } from "routing-controllers";


export class FoodController {
  constructor(private foodService: FoodService) {}

  @Post()
}
