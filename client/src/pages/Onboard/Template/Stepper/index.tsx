import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import { TextField, Button } from "@/components";
import { chat } from "@/assets";

const StepperTemplate = ({ token }: any): React.ReactElement => {
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

              {token ? (
                <Button style="start slide_right">
                  <Link to="/main">시 작</Link>
                </Button>
              ) : (
                <Button style="login">
                  <Link to="/login">회 원 가 입</Link>
                </Button>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default StepperTemplate;
