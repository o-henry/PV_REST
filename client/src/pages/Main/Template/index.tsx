import React from "react";

import Grid from "@material-ui/core/Grid";

import { Speech, TextField, Menu } from "@/components";

const MainTemplate = (): React.ReactElement => {
  return (
    <div className="main fade_in">
      <Grid container>
        <Menu />

        <Grid className="main container" item xs={12}>
          <TextField style="main_head">섭취한 음식명을 말해주세요.</TextField>

          <div className="main speech">
            <Speech />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainTemplate;
