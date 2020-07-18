import config from "@config/index";
import { User } from "@models/User";

import passport from "passport";
import Kakao from "passport-kakao";

export default () => {
  const KakaoStrategy = Kakao.Strategy;

  passport.use(
    new KakaoStrategy(
      {
        clientID: config.kakao.id,
        clientSecret: "",
        callbackURL: config.kakao.redirect,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          //   const exUser = await User.findOne({})
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
