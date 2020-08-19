import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import { TextField } from "@/components";
import { chat } from "@/assets";

const StepperTemplate = (): React.ReactElement => {
  const token = localStorage.getItem("token");

  return (
    <div className="stepper">
      <Grid container>
        <Grid item xs={12}>
          <div className="stepper fade_in">
            <div className="stepper circle">
              <div className="stepper chat container">
                <img className="chat" src={chat} alt="chat emoji" />
              </div>
            </div>
            <div className="stepper text">
              <TextField style="step_head">
                섭취한 음식명을 말씀해주세요
              </TextField>
              <TextField style="step_body">
                해당 음식의 칼로리 와 당 함량을 제공합니다.
              </TextField>
            </div>

            {token ? (
              <Link className="start slide_right" to="/main">
                시 작
              </Link>
            ) : (
              <Link className="start slide_right" to="/login">
                회 원 가 입
              </Link>
            )}

            <div className="stepper notification">
              Google Chrome 브라우저에서 실행해주세요.
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepperTemplate;
