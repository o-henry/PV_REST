// import { Service } from "typedi";
// import { getConnection, getRepository, createQueryBuilder } from "typeorm";

// import { UserRepository } from "@repositories/user.repository";
// import { IUser } from "@interface/IUser";
// import { User } from "@models/User";
// import { Food } from "@models/Food";

// type UserServiceFoodData = Omit<Food, "user">;

// export interface IUserServiceDataToUpdate extends IUser {
//   foods: UserServiceFoodData[];
// }

// export type UserServiceDataToCreate = Omit<IUserServiceDataToUpdate, "id">;

// @Service()
// export class UserService {
//   protected UserRepository: UserRepository;

//   public getAll(): Promise<User[]> {
//     return getConnection()
//       .getRepository(User)
//       .createQueryBuilder("user")
//       .leftJoinAndSelect("user.foods", "food")
//       .orderBy({ user: "ASC", food: "ASC" })
//       .getMany();
//   }

//   public async create({
//     foods,
//     ...data
//   }: UserServiceDataToCreate): Promise<User> {
//     const newUser = new User();
//     Object.assign(newUser, data);

//     const user = await getRepository(User).save(newUser);

//     if (foods && foods.length) {
//       await Promise.all(
//         foods.map((foodData) => this._saveFood(foodData, user))
//       );
//     }

//     return user;
//   }

//   private _saveFood(data: UserServiceFoodData, user: User): Promise<Food> {
//     const newFood = new Food();
//     Object.assign(newFood, { ...data, user });

//     return getRepository(Food).save(newFood);
//   }

//   public findOne(sns: IUser): Promise<User | undefined> {
//     return this.UserRepository.findOne({
//       where: {
//         sns,
//       },
//     });
//   }
// }

import { Service } from "typedi";
import { Repository } from "typeorm";
import { OrmRepository } from "typeorm-typedi-extensions";
import { BadRequestError, NotFoundError } from "routing-controllers";

import { Food } from "@models/Food";
import { User } from "@models/User";

@Service()
export class UserService {
  @OrmRepository(Food)
  private foodRepository: Repository<Food>;

  @OrmRepository(User)
  private userRepository: Repository<User>;

  public async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  public async findOne(
    id: string | number | Date | import("typeorm").ObjectID
  ): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundError("user is not found");
    }
    return user;
  }
}
