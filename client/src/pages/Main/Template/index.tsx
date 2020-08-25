import React from "react";
import { observer } from "mobx-react";

import Grid from "@material-ui/core/Grid";

import { Speech, TextField, Menu } from "@/components";
import { useStores } from "@/hooks";

const MainTemplate = observer(
  (): React.ReactElement => {
    const { event } = useStores();

    return (
      <div className="main fade_in">
        <Grid container>
          <Menu />

          <Grid className="main container" item xs={12}>
            <TextField style={!event.isClicked ? "main_head" : "main hide"}>
              섭취한 음식명을 말해주세요.
            </TextField>

            <div className="main speech">
              <Speech />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
);

export default MainTemplate;
