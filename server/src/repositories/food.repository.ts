import { Food } from "@models/Food";

import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Food)
export class FoodRepository extends Repository<Food> {}
