import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import { TextField } from "@/components";
import { chat } from "@/assets";

const StepperTemplate = (): React.ReactElement => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className="fade_in">
            <div className="step circle">
              <div className="step chat container">
                <img className="chat" src={chat} alt="chat emoji" />
              </div>
              <div className="step text">
                <TextField style="step head">
                  섭취한 음식명을 말씀해주세요
                </TextField>
                <TextField style="step body">
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

              <div className="step notification">
                Google Chrome 브라우저에서 실행해주세요.
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default StepperTemplate;
