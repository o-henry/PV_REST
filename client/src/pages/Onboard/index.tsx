import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { BannerTemplate, StepperTemplate } from "@/pages";

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

  return <>{show ? <StepperTemplate /> : <BannerTemplate />}</>;
};

export default Onboard;
