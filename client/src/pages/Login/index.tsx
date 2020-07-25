import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { observer } from "mobx-react";

import { LoginTemplate } from "@/pages";
import { kakaoAPI } from "@/utils/kakao.api";
import { useStores } from "@/hooks";

const Login = observer(() => {
  const { event } = useStores();

  const kakao = kakaoAPI();

  let history = useHistory();
  let location = useLocation();
  let { from }: any = location.state || { from: { pathname: "/" } };

  console.log("location:", location);

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
