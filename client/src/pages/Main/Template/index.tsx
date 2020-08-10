import React from "react";

import { Card, SelectButton, Speech } from "@/components";
import Grid from "@material-ui/core/Grid";

const MainTemplate = (): React.ReactElement => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <SelectButton style={"select"} />
            <Speech />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainTemplate;
