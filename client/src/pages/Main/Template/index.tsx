import React from "react";
import Grid from "@material-ui/core/Grid";

import { Speech, TextField } from "@/components";

const MainTemplate = (): React.ReactElement => {
  return (
    <>
      <Grid container>
        <Grid className="main_container" item xs={12}>
          <TextField style="main_head">섭취한 음식명을 말해주세요.</TextField>
          // 클릭이벤트 발생시 실행하도로 변경
          <div className="main_speech">
            <Speech />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainTemplate;
