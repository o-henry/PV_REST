import React, { useEffect } from "react";
import { observer } from "mobx-react";

import { LoginTemplate } from "@/pages";
import { kakaoAPI } from "@/utils/kakao.api";
import { useStores } from "@/hooks";

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
