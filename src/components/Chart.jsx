import React from "react";
import ReactApexChart from "react-apexcharts";
import { ChartCard, Legend, LegendItem, ColorDot, Image } from "./Chart-style";
import dot from "../assets/orders/Menu.svg";
import { OrderTitle, Title } from "./Order";

export default function Chart() {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Sale", "Distribute", "Return"],
    legend: {
      show: false,
    },
  };

  const series = [44, 32, 41];
  const colors = ["#008FFB", "#00E396", "#FEB019"];

  return (
    <ChartCard>
      <OrderTitle>
        <Title>Analytics</Title>
        <Image>
          <img src={dot} width={12} />
        </Image>
      </OrderTitle>
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
