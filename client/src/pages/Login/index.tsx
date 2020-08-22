import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useHistory, useLocation } from "react-router-dom";

import axios from "axios";

import { LoginTemplate } from "@/pages";
import { useStores } from "@/hooks";

const Login = observer(() => {
  const history = useHistory();

  const location = useLocation();

  const { event } = useStores();

  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get("/v1/csrf-token");
      axios.defaults.headers.post["X-CSRF-Token"] = data.csrfToken;

      console.log("data", data);
    };
    getCsrfToken();
  }, []);

  return (
    <>
      <LoginTemplate />
    </>
  );
});

export default Login;
