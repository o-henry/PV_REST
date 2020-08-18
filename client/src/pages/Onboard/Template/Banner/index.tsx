import React from "react";
import Grid from "@material-ui/core/Grid";

import { TextField } from "@/components";
import { main } from "@/assets";

const BannerTemplate = (): React.ReactElement => {
  return (
    <div className="onboard">
      <Grid container>
        <Grid item xs={12}>
          <div className="onboard fade_in">
            <img src={main} alt="onboard_page" />
            <TextField style="onboard_footer">
              CREATED BY <br /> HENRY
            </TextField>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BannerTemplate;
