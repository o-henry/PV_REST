import React, { useEffect, useState } from "react";

import { BannerTemplate, StepperTemplate } from "@/pages";

const Onboard = () => {
  const [show, setShow] = useState(false);

  setTimeout(() => {
    setShow(true);
  }, 2000);

  return <>{show ? <StepperTemplate /> : <BannerTemplate />}</>;
};

export default Onboard;
