import React from "react";
import Grid from "@material-ui/core/Grid";

import { TextField } from "@/components";
import { main } from "@/assets";

const OnboardTemplate = (): React.ReactElement => {
  return (
    <>
      <Grid container>
        <Grid className="onboard_container" item xs={12}>
          <img src={main} alt="onboard_page" />
          <TextField style="onboard_footer">
            {" "}
            CREATED BY <br /> HENRY{" "}
          </TextField>
        </Grid>
      </Grid>
    </>
  );
};

export default OnboardTemplate;
