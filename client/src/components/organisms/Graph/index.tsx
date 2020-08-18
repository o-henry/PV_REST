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
    hAxis: {
      minValue: 0,
    },
    colors: ["#FF5959"],
    legend: { position: "none" },
    axes: {
      x: {
        0: { side: "top", label: "CALORIE" }, // Top x-axis.
      },
    },
  };

  return (
    <Chart
      width="96%"
      height="90%"
      className="chart"
      chartType="Bar"
      loader={<CircularProgress />}
      data={data}
      options={options}
    />
  );
};

export default Graph;
