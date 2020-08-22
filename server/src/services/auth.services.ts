import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";

import { User } from "@models/User";
import { UserRepository } from "@repositories/user.repository";
import { LoginUser } from "@dto/user.dto";

@Service()
export class AuthService {
  constructor(@OrmRepository() private userRepository: UserRepository) {}

  public async validateUser(loginUser: LoginUser): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        nickname: loginUser.id,
      },
    });

    if (await User.comparePassword(user, loginUser.password)) {
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
    user.refreshToken = token;
    await this.userRepository.save(user);
  }
}
