import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { TextField, Count } from "@/components";

const Card = () => {
  return (
    <>
      <Grid item xs={6}>
        <Paper className="card" elevation={0} />
      </Grid>
      <Grid item xs={6}>
        <Paper className="card" elevation={0} />
      </Grid>
      <Grid item xs={6}>
        <Paper className="card" elevation={0} />
      </Grid>
      <Grid item xs={6}>
        <Paper className="card" elevation={0} />
      </Grid>
    </>
  );
};

export default Card;
