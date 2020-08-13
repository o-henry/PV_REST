import React from "react";
import Grid from "@material-ui/core/Grid";
import MobileStepper from "@material-ui/core/MobileStepper";

const StepperTemplate = (): React.ReactElement => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className="fade_in">
            <div className="step_bg_circle"></div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default StepperTemplate;
