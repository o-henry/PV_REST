import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import { useStores } from "@/hooks";
import { TextField } from "@/components";
import { character } from "@/assets";

const StepperTemplate = observer(
  (): React.ReactElement => {
    const { event } = useStores();

    return (
      <div className="stepper">
        <Grid container>
          <Grid item xs={12}>
            <div className="stepper fade_in">
              {/* <div className="stepper circle"> */}
              {/* <div className="stepper chat container"> */}
              <img className="chat" src={character} alt="chat emoji" />
              {/* </div> */}
              {/* </div> */}
              <div className="stepper text">
                <TextField style="step_head">
                  섭취한 음식명을 말씀해주세요
                </TextField>
                <TextField style="step_body">
                  칼로리 와 당 함량을 제공합니다
                </TextField>
              </div>

              <div className="link container">
                {localStorage.getItem("user") ? (
                  <Link className="start slide_right" to="/main">
                    시 작 하 기
                  </Link>
                ) : (
                  <Link className="start slide_right" to="/login">
                    로 그 인
                  </Link>
                )}
              </div>
              <div className="stepper notification">
                Google Chrome 브라우저에서 실행해주세요.
              </div>
            </div>
          </Grid>
        </Grid>
        <a
          className="footer"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:c.henry.9209@gmail.com"
        >
          문의하기
        </a>
      </div>
    );
  }
);

export default StepperTemplate;
