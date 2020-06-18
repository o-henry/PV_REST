import React from "react";
import { Button } from "@/components";
import { lg_wd_kakao } from "@/assets";

const LoginButton = () => {
  return (
    <>
      <Button>
        <img src={lg_wd_kakao} alt="login_button" />
      </Button>
    </>
  );
};
export default LoginButton;
