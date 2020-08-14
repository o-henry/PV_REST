import React from "react";
import Grid from "@material-ui/core/Grid";

import { Button } from "@/components";

const ButtonGroup = (): React.ReactElement => {
  return (
    <>
      <Grid item xs={6}>
        <Button style="intake">일일섭취량</Button>
      </Grid>
      <Grid item xs={6}>
        <Button style="recommend">일일권장량</Button>
      </Grid>
    </>
  );
};

export default ButtonGroup;
