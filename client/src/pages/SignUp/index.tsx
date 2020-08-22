import React, { useEffect, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import swal from "sweetalert";

import { SignUpTemplate } from "@/pages";
import { xhrAPI } from "@/utils/axios";

const SignUp = ({ history }: RouteComponentProps) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const onSubmit = async (data: any) => {
    await xhrAPI(process.env.REACT_APP_BASE_URL)
      .post(`${process.env.REACT_APP_AUTH_SIGNUP}`, data)
      .then((res) => {
        if (res.data.accessToken) {
          setIsSignUp(true);
        }
      })
      .catch((error) => console.error("error", error));
  };

  useEffect(() => {
    if (isSignUp) {
      swal("Thank You!", "회원가입 되셨습니다!", "success");
      history.push("/");
    }
  }, [history, isSignUp]);

  return (
    <>
      <SignUpTemplate onSubmit={onSubmit} />
    </>
  );
};

export default withRouter(SignUp);
