import React from "react";

import Grid from "@material-ui/core/Grid";

import { ButtonGroup, MenuList, Graph } from "@/components";

const StatisticsTemplate = ({
  value,
  handleChange,
}: any): React.ReactElement => {
  return (
    <div className="statistics">
      <Grid className="statistics item" container>
        <Grid className="statistics tabs" item xs={12}>
          <ButtonGroup />
        </Grid>

        <MenuList value={value} handleChange={handleChange} />

        <Grid className="statistics chart" item xs={12}>
          {/* <Graph /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default StatisticsTemplate;
