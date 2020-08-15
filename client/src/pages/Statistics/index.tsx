import React, { useState, ChangeEvent } from "react";

import { StatisticsTemplate } from "@/pages";

const Statistics = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <StatisticsTemplate value={value} handleChange={handleChange} />
    </>
  );
};

export default Statistics;
