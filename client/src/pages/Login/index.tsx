import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useHistory, useLocation } from "react-router-dom";

import { LoginTemplate } from "@/pages";
import { kakaoAPI } from "@/utils/kakao.api";
import { useStores } from "@/hooks";

const Login = observer(() => {
  const history = useHistory();

  const location = useLocation();

  const { event } = useStores();

  const kakao = kakaoAPI();

  useEffect(() => {
    if (event.isClicked) {
      kakao.loginKakao();
    }
  }, [event.isClicked]);

  return (
    <>
      <LoginTemplate />
    </>
  );
});

export default Login;
