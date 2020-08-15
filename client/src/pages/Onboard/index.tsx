import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";

import { BannerTemplate, StepperTemplate } from "@/pages";
import { useStores } from "@/hooks";

const Onboard = observer(({ token }: any | string) => {
  const [show, setShow] = useState(false);

  const { event } = useStores();

  const timer = setTimeout(() => {
    setShow(true);
  }, 1500);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

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
