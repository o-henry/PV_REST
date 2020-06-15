import React, { useEffect } from "react";
import { MainTemplate } from "@/pages";
import { getSpeechModule } from "@/api/speech.api";

const Main = () => {
  useEffect(() => {
    getSpeechModule();
  });

  return (
    <>
      <MainTemplate />
    </>
  );
};

export default Main;
