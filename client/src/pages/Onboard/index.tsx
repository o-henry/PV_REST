import React, { useEffect, useState } from "react";

import { BannerTemplate, StepperTemplate } from "@/pages";

const Onboard = () => {
  const [show, setShow] = useState(false);

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
