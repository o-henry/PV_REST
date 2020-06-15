import React from "react";
import { Card, SelectButton, SpeechButton } from "@/components";

const MainTemplate = () => {
  return (
    <>
      <div>
        <SelectButton style={"select"} />
        <Card />
        <SpeechButton />
      </div>
    </>
  );
};

export default MainTemplate;
