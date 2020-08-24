import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { observer } from "mobx-react";
import swal from "sweetalert";

import { SignUpTemplate } from "@/pages";
import { xhrAPI } from "@/utils/axios";
import { useStores } from "@/hooks";

const SignUp = observer(({ history }: RouteComponentProps) => {
  const { event } = useStores();

  const onSubmit = async (data: any) => {
    await xhrAPI(process.env.REACT_APP_BASE_URL)
      .post(`${process.env.REACT_APP_AUTH_SIGNUP}`, data)
      .then((res) => {
        if (res.data.accessToken) {
          event.isSignUp = true;
          localStorage.setItem("token", res.data.accessToken);
        }
      })
      .catch((error) => console.error("error", error));
  };

  useEffect(() => {
    if (event.isSignUp) {
      swal("Thank You!", "회원가입 되셨습니다!", "success");
      history.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(event.isSignUp));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [history, event.isSignUp]);

  return (
    <>
      <SignUpTemplate onSubmit={onSubmit} />
    </>
  );
});

export default withRouter(SignUp);
