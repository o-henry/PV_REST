import React, { useEffect } from "react";
import { observer } from "mobx-react";

import { LoginTemplate } from "@/pages";
import { useStores } from "@/hooks";

const Login = observer(() => {
  const { event } = useStores();

  return (
    <>
      <LoginTemplate />
    </>
  );
});

export default Login;
