import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import axios from "axios";

import { LoginTemplate } from "@/pages";
import { useStores } from "@/hooks";
import { xhrAPI } from "@/utils/axios";

const Login = observer(({ history }: RouteComponentProps) => {
  const { event } = useStores();

  const onSubmit = async (data: any) => {
    await axios
      .post(
        `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_AUTH_LOGIN}`,
        data
      )
      .then((res) => {
        console.log("@@@", res);
        if (res.data.accessToken) {
          event.isLogin = true;

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.accessToken}`;
        }
      })
      .catch((error) => console.error("error", error));
    // await xhrAPI(process.env.REACT_APP_BASE_URL)
    //   .post(`${process.env.REACT_APP_AUTH_LOGIN}`, data)
    //   .then((res) => {
    //     if (res.data.accessToken) {
    //       event.isLogin = true;
    //     }
    //   })
    //   .catch((error) => console.error("error", error));
  };

  useEffect(() => {
    if (event.isLogin) {
      history.push("/main");
      try {
        localStorage.setItem("user", JSON.stringify(event.isLogin));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [history, event.isLogin]);

  return (
    <>
      <LoginTemplate onSubmit={onSubmit} />
    </>
  );
});

export default withRouter(Login);
