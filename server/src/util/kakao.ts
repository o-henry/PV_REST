import passport from "passport";
import Kakao from "passport-kakao";

export default () => {
  const KakaoStrategy = Kakao.Strategy;

  passport.use(
    new KakaoStrategy(
      {
        clientID: "",
        clientSecret: "",
        callbackURL: "",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
