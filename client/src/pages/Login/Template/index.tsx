import React from "react";
import Grid from "@material-ui/core/Grid";

import { LoginButton, TextField } from "@/components";
import { burger } from "@/assets";

const LoginTemplate = () => {
  return (
    <div className="login">
      <Grid container>
        <Grid item xs={12}>
          <div className="login fade_in">
            <img className="login_banner" src={burger} alt="banner" />
            <TextField style="login_banner_head"> HUNGER </TextField>
            <TextField style="login_banner_body">
              손쉬운 칼로리 & 당 관리
            </TextField>
            <LoginButton />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default LoginTemplate;
