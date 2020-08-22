import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { LoginTemplate } from "@/pages";
import { useStores } from "@/hooks";
import { xhrAPI } from "@/utils/axios";

const Login = observer(({ history }: RouteComponentProps) => {
  const { event } = useStores();

  const onSubmit = async (data: any) => {
    await xhrAPI(process.env.REACT_APP_BASE_URL)
      .post(`${process.env.REACT_APP_AUTH_LOGIN}`, data)
      .then((res) => {
        if (res.data.accessToken) {
          event.isLogin = true;
        }
      })
      .catch((error) => console.error("error", error));
  };

  useEffect(() => {
    if (event.isLogin) {
      history.push("/main");
    }
  }, [history, event.isLogin]);

  return (
    <>
      <LoginTemplate onSubmit={onSubmit} />
    </>
  );
});

export default withRouter(Login);
