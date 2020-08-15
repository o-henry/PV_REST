import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";

import { menu } from "@/assets";
import { Button } from "@/components";
import { useStores } from "@/hooks";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const FullScreenDialog = observer(
  (): React.ReactElement => {
    const { event } = useStores();

    return (
      <div className="menu">
        <Button style="menu">
          <img src={menu} alt="menu_button" />
        </Button>
        <Dialog
          fullScreen
          open={event.isClicked}
          TransitionComponent={Transition}
        >
          <Toolbar className="menu toolbar">
            <Button style="menu close">
              <CloseIcon />
            </Button>
          </Toolbar>
          <div className="menu link container">
            <Button>
              <Link className="menu link" to="/main">
                말하기
              </Link>
            </Button>
          </div>
          <div className="menu link container">
            <Button>
              <Link className="menu link" to="/statistics">
                통계 보기
              </Link>
            </Button>
          </div>
        </Dialog>
      </div>
    );
  }
);

export default FullScreenDialog;
