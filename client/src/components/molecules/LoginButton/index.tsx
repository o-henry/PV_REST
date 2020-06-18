import React from "react";
import { Button } from "@/components";
import { md_wd_kakao } from "@/assets";

const LoginButton = () => {
  return (
    <>
      <Button>
        <img src={md_wd_kakao} alt="login_button" />
      </Button>
    </>
  );
};
export default LoginButton;
