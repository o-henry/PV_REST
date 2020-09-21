import {
  EntityRepository,
  Repository,
  MoreThan,
  LessThan,
  Between,
} from "typeorm";
import { format, addDays } from "date-fns";

import { Food } from "@models/Food";

@EntityRepository(Food)
export class FoodRepository extends Repository<Food> {}

export const AfterDate = (date: Date) =>
  MoreThan(format(date, "yyyy-MM-dd HH:MM:SS"));

export const BeforeDate = (date: Date) =>
  LessThan(format(date, "yyyy-MM-dd HH:MM:SS"));

export const Day = (date: Date) => Between(date, addDays(date, 1));
