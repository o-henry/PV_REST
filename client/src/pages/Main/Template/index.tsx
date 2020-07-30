import React from "react";
import { Card, SelectButton, Speech } from "@/components";

const MainTemplate = (): React.ReactElement => {
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
