import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { Button, ButtonGroup, Card } from "@/components";

const StatisticsTemplate = (): React.ReactElement => {
  return (
    <div className="statistics">
      <Grid className="statistics item" container>
        <Grid className="statistics tabs" item xs={12}>
          <ButtonGroup />
        </Grid>

        <Card />
      </Grid>
    </div>
  );
};

export default StatisticsTemplate;
