import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";
import { BadRequestError, NotFoundError } from "routing-controllers";

import { User } from "@models/User";
import { UserRepository } from "@repositories/user.repository";

@Service()
export class UserService {
  @OrmRepository()
  private userRepository: UserRepository;

  public find(): Promise<User[]> {
    return this.userRepository.find({ relations: ["foods"] });
  }

  public findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ id });
  }

  public async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  public update(id: string, user: User): Promise<User> {
    user.id = id;
    return this.userRepository.save(user);
  }
}
