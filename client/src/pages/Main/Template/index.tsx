import React from "react";
import { Card, SelectButton, Speech } from "@/components";

const MainTemplate = () => {
  return (
    <>
      <div>
        <SelectButton style={"select"} />
        <Card />
        <Speech />
      </div>
    </>
  );
};

export default MainTemplate;
