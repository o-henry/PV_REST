import React, { useEffect } from "react";
import { observer } from "mobx-react";

import { useStores } from "@/hooks";

const Loader = observer(({ recognition }: any) => {
  const { event } = useStores();

  const startListen = () => {
    return recognition.startListening({ language: "ko" });
  };

  const keepListen = setTimeout(() => {
    recognition.stopListening();

    event.isClicked = false;
  }, 2000);

  useEffect(() => {
    startListen();
  }, []);

  useEffect(() => {
    keepListen;
    return () => {
      clearTimeout(keepListen);
    };
  }, [keepListen]);

  return (
    <>
      <div className="google-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
});

export default Loader;
