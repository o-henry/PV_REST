import React from "react";

import { Card, SelectButton, Speech } from "@/components";
import Grid from "@material-ui/core/Grid";

const MainTemplate = (): React.ReactElement => {
  return (
    <>
      <Grid container>
        <div>
          <SelectButton style={"select"} />
          <Card />
          <Speech />
        </div>
      </Grid>
    </>
  );
};

export default MainTemplate;
