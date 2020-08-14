import React, { useState } from "react";
import { observer } from "mobx-react";

import { BannerTemplate, StepperTemplate } from "@/pages";
import { useStores } from "@/hooks";

const Onboard = observer(({ token }: any | string) => {
  const [show, setShow] = useState(false);

  const { event } = useStores();

  setTimeout(() => {
    setShow(true);
  }, 1500);

  return (
    <>
      {show ? (
        <StepperTemplate token={token} event={event} />
      ) : (
        <BannerTemplate />
      )}
    </>
  );
});

export default Onboard;
