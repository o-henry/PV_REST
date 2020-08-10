import React from "react";
import Grid from "@material-ui/core/Grid";

import { LoginButton, TextField } from "@/components";
import { burger } from "@/assets";

const LoginTemplate = () => {
  return (
    <>
      <Grid container>
        <Grid className="login_container" item xs={12}>
          <img className="login_banner" src={burger} alt="banner" />
          <TextField style="login_banner_head"> HUNGER </TextField>
          <TextField style="login_banner_body">
            {" "}
            손쉬운 칼로리 & 당 관리
          </TextField>
          <LoginButton />
        </Grid>
      </Grid>
    </>
  );
};
export default LoginTemplate;
