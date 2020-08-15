import React from "react";

import Grid from "@material-ui/core/Grid";

import { ButtonGroup, MenuList } from "@/components";

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
      </Grid>
    </div>
  );
};

export default StatisticsTemplate;
