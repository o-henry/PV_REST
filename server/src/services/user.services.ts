import { User } from "@models/User";
import { UserRepository } from "@repositories/user.repository";

import { Service } from "typedi";
import { getConnection } from "typeorm";

@Service()
export class UserService {
  protected UserRepository: UserRepository;

  constructor() {
    this.UserRepository = getConnection().getRepository(User);
  }

  public findOne(id: string, provider: string): Promise<User | undefined> {
    return this.UserRepository.findOne({
      where: {
        id: id,
        provider: provider,
      },
    });
  }
}
