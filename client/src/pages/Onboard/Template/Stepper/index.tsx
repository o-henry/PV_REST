import React from "react";
import Grid from "@material-ui/core/Grid";
import MobileStepper from "@material-ui/core/MobileStepper";

import { TextField } from "@/components";
import { chat } from "@/assets";

const StepperTemplate = (): React.ReactElement => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className="fade_in">
            <div className="step_bg_circle">
              <div className="chat_container">
                <img className="chat" src={chat} alt="chat emoji" />
              </div>

              <div className="text_container">
                <TextField style="step_head">
                  섭취한 음식명을 말씀해주세요
                </TextField>
                <TextField style="step_body">
                  해당 음식의 칼로리 와 당 함량을 제공합니다.
                </TextField>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default StepperTemplate;
