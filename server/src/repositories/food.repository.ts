import { EntityRepository, Repository, MoreThanOrEqual } from "typeorm";
import { format, isThisWeek, subDays, isMonday } from "date-fns";

import { Food } from "@models/Food";

@EntityRepository(Food)
export class FoodRepository extends Repository<Food> {
  public async findOneByName(name: string) {
    return this.createQueryBuilder("food")
      .select([
        "food.name",
        "food.natrium",
        "food.carbohydrate",
        "food.sugar",
        "food.calorie",
        "food.date",
      ])
      .where("food.name = :name", { name })
      .orderBy("food.createdDate", "DESC")
      .getOne();
  }
}

export const AfterDate = (date: Date) => {
  return MoreThanOrEqual(format(date, "yyyy-MM-dd"));
};

export const BeforeDate = (date: Date) => {
  let a = subDays(date, 7),
    b = subDays(date, 6),
    c = subDays(date, 5),
    d = subDays(date, 4),
    e = subDays(date, 3),
    f = subDays(date, 2),
    g = subDays(date, 1);

  if (isMonday(date)) {
    date = date;
  } else if (isMonday(a)) {
    date = a;
  } else if (isMonday(b)) {
    date = b;
  } else if (isMonday(c)) {
    date = c;
  } else if (isMonday(d)) {
    date = d;
  } else if (isMonday(e)) {
    date = e;
  } else if (isMonday(f)) {
    date = f;
  } else if (isMonday(g)) {
    date = g;
  }

  if (isThisWeek(date, { weekStartsOn: 1 })) {
    console.log("Monday", date);
    return MoreThanOrEqual(format(date, "yyyy-MM-dd"));
  }
};
