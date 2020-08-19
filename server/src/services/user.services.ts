import { Service } from "typedi";
import { getConnection, getRepository, createQueryBuilder } from "typeorm";

import { UserRepository } from "@repositories/user.repository";
import { IUser } from "@interface/IUser";
import { User } from "@models/User";
import { Food } from "@models/Food";

type UserServiceFoodData = Omit<Food, "user">;

export interface IUserServiceDataToUpdate extends IUser {
  foods: UserServiceFoodData[];
}

export type UserServiceDataToCreate = Omit<IUserServiceDataToUpdate, "id">;

@Service()
export class UserService {
  protected UserRepository: UserRepository;

  public async create({
    foods,
    ...data
  }: UserServiceDataToCreate): Promise<User> {
    const newUser = new User();
    Object.assign(newUser, data);

    const user = await getRepository(User).save(newUser);

    if (foods && foods.length) {
      await Promise.all(
        foods.map((foodData) => this._saveFood(foodData, user))
      );
    }
    return;
  }

  private _saveFood(data: UserServiceFoodData, user: User): Promise<Food> {
    const newFood = new Food();
    Object.assign(newFood, { ...data, user });

    return getRepository(Food).save(newFood);
  }

  public findOne(sns: IUser): Promise<User | undefined> {
    return this.UserRepository.findOne({
      where: {
        sns,
      },
    });
  }
}
