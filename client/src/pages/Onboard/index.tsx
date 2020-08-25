import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { BannerTemplate, StepperTemplate } from "@/pages";
import { isChrome } from "@/utils/browser";

const Onboard = () => {
  const [show, setShow] = useState(false);
  const open = true;

  const timer = setTimeout(() => {
    setShow(true);
  }, 1000);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  return (
    <>
      {show && !isChrome ? (
        <>
          {
            <div className="onboard alert">
              <StepperTemplate />

              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                autoHideDuration={3000}
              >
                <MuiAlert elevation={6} variant="filled" severity="warning">
                  Google Chrome 에서 실행해주세요!
                </MuiAlert>
              </Snackbar>
            </div>
          }
        </>
      ) : show ? (
        <StepperTemplate />
      ) : (
        <BannerTemplate />
      )}
    </>
  );
};

export default Onboard;
