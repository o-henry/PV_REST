import React from "react";
import { observer } from "mobx-react";

import { Button } from "@/components";
import { useStores } from "@/hooks";

const LoginButton = observer(({ prop }: any) => {
  const { event } = useStores();

  event.isClicked = false;

  return (
    <>
      <Button style="login">로그인</Button>
    </>
  );
});
export default LoginButton;
