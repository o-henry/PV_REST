import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";
import { BadRequestError, NotFoundError } from "routing-controllers";

import { User } from "@models/User";
import { UserRepository } from "@repositories/user.repository";
import { CreateUser } from "@dto/user.dto";

@Service()
export class UserService {
  constructor(@OrmRepository() private userRepository: UserRepository) {}

  public find(): Promise<User[]> {
    return this.userRepository.find({ relations: ["foods"] });
  }

  public findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ id });
  }

  public async create(createuser: CreateUser): Promise<User> {
    const user = createuser.toEntity();
    return await this.userRepository.save(user);
  }

  public async check(id: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: { nickname: id },
    });

    return user ? true : false;
  }
}
