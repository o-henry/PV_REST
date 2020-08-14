import React from "react";
import { Button } from "@/components";

import { observer } from "mobx-react";
import { useStores } from "@/hooks";

const LoginButton = observer(() => {
  const { event } = useStores();

  event.isClicked = false;

  return (
    <>
      <Button style="kakao">카카오 로그인</Button>
    </>
  );
});
export default LoginButton;
