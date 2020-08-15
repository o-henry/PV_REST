import React from "react";
import Chart from "react-google-charts";

import CircularProgress from "@material-ui/core/CircularProgress";

const Graph = () => {
  const data = [
    ["섭취량", "칼로리"],
    ["MON", 100],
    ["TUE", 3000],
    ["WED", 1000],
    ["THU", 500],
    ["FRI", 200],
    ["SAT", 5000],
    ["SUN", 1500],
  ];

  const options = {
    title: "섭취량 통계",
    chartArea: { width: "90%" },
    hAxis: {
      minValue: 0,
    },
    colors: ["#FF5959"],
  };

  return (
    <Chart
      width="99%"
      height="95%"
      className="chart"
      chartType="Bar"
      loader={<CircularProgress />}
      data={data}
      options={options}
      legendToggle
    />
  );
};

export default Graph;
