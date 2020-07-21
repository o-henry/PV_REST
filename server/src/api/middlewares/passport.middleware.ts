import config from "@config/index";
import { UserService } from "@services/user.services";
import { Provider } from "@interface/IUser";
import { Food } from "@models/Food";

import passport from "passport";
import kakao from "passport-kakao";

const KakaoStrategy = kakao.Strategy;
const user = new UserService();

passport.use(
  new KakaoStrategy(
    {
      clientID: config.kakao.id,
      clientSecret: config.kakao.secret,
      callbackURL: config.kakao.redirect,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const exUser = await user.findOne({
          id: profile.id,
          provider: Provider["KAKAO"],
        });

        if (exUser) {
          done(null, exUser);
        } else {
          const newUser = await user.create({
            sns: profile.id,
            provider: Provider["KAKAO"],
            name: profile.displayName,
            foods: [new Food()],
          });

          done(null, newUser);
        }
      } catch (error) {
        console.error(error);
        done(error);
      }
    }
  )
);
