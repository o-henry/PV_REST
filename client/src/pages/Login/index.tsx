import React, { useEffect } from "react";
import { LoginTemplate } from "@/pages";
import { kakaoAPI } from "@/utils/kakaoAPI";
import { useStores } from "@/hooks";
import { observer } from "mobx-react";

const Login = observer(() => {
  const { event } = useStores();
  const kakao = kakaoAPI();

  useEffect(() => {
    event.isClicked && kakao.loginKakao();
  }, [event.isClicked]);

  return (
    <>
      <LoginTemplate />
    </>
  );
});

export default Login;
