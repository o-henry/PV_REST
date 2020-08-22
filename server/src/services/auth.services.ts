import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";

import { User } from "@models/User";
import { UserRepository } from "@repositories/user.repository";

@Service()
export class AuthService {
  constructor(@OrmRepository() private userRepository: UserRepository) {}

  public async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        username,
      },
    });

    if (await User.comparePassword(user, password)) {
      return user;
    }

    return undefined;
  }

  public async validateUserToken(
    userId: string,
    refreshToken: string
  ): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
        refreshToken: refreshToken,
      },
    });

    if (user) {
      return user;
    }

    return undefined;
  }

  public async saveRefreshToken(user: User, token: string): Promise<void> {
    user.refreshToekn = token;
    await this.userRepository.save(user);
  }
}
