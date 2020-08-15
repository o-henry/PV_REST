import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { TextField } from "@/components";

const Card = () => {
  return (
    <>
      <div className="card container">
        <Grid item xs={6}>
          <Paper className="card" elevation={0}>
            <TextField style="calorie">칼로리</TextField>
            <TextField style="calorie data">2,000 Kcal</TextField>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className="card" elevation={0}>
            <TextField style="calorie">당</TextField>
            <TextField style="calorie data">52g</TextField>
          </Paper>
        </Grid>
      </div>

      <div className="card container">
        <Grid item xs={6}>
          <Paper className="card" elevation={0}>
            <TextField style="calorie">나트륨</TextField>
            <TextField style="calorie data">200g</TextField>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className="card" elevation={0}>
            <TextField style="calorie">탄수화물</TextField>
            <TextField style="calorie data">599g</TextField>
          </Paper>
        </Grid>
      </div>
    </>
  );
};

export default Card;
