import { Service } from "typedi";
import { getConnection } from "typeorm";

import { User } from "@models/User";
import { UserRepository } from "@repositories/user.repository";
import { IUser } from "@interface/IUser";

@Service()
export class UserService {
  protected UserRepository: UserRepository;

  constructor() {
    this.UserRepository = getConnection().getRepository(User);
  }

  public async create(user: User): Promise<User> {
    const newUser = await this.UserRepository.save(user);
    return newUser;
  }

  public findOne(sns: IUser): Promise<User | undefined> {
    return this.UserRepository.findOne({
      where: {
        sns,
      },
    });
  }
}
