import React from "react";
import ReactApexChart from "react-apexcharts";
import { ChartCard, Legend, LegendItem, ColorDot } from "./Chart-style";

export default function Chart() {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Sale", "Distribute", "Return"],
    legend: {
      show: false, // ApexCharts legendni o'chiramiz
    },
  };

  const series = [44, 32, 41];
  const colors = ["#008FFB", "#00E396", "#FEB019"];

  return (
    <ChartCard>
      <h3>Analytics</h3>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={390}
        height={300}
      />

      <Legend>
        {options.labels.map((label, i) => (
          <LegendItem key={i}>
            <ColorDot style={{ backgroundColor: colors[i] }} />
            {label}
          </LegendItem>
        ))}
      </Legend>
    </ChartCard>
  );
}
