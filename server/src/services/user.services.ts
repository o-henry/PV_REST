import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";

import { User } from "@models/User";
import { UserRepository } from "@repositories/user.repository";

@Service()
export class UserService {
  constructor(@OrmRepository() private userRepository: UserRepository) {}

  public find(): Promise<User[]> {
    return this.userRepository.find({ relations: ["foods"] });
  }

  public findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ id });
  }

  public async check(id: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: { nickname: id },
    });

    return user ? true : false;
  }
}
