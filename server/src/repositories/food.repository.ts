import { EntityRepository, Repository, MoreThan, LessThan } from "typeorm";

import { Food } from "@models/Food";

@EntityRepository(Food)
export class FoodRepository extends Repository<Food> {}
