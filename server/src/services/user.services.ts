import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";
import { BadRequestError, NotFoundError } from "routing-controllers";

import { User } from "@models/User";
import { UserRepository } from "@repositories/user.repository";

@Service()
export class UserService {
  @OrmRepository()
  private userRepository: UserRepository;

  public async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
