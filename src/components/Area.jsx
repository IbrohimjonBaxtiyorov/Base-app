import ReactApexChart from "react-apexcharts";
import { ChartCard, Image } from "./Chart-style";
import { OrderTitle, Title } from "./Order";
import dot from "../assets/orders/Menu.svg";

export default function Area() {
  const series = [
    {
      name: "series1",
      data: [60, 37, 60, 39, 52, 21, 54, 18, 30, 75, 94],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:00:00.000Z",
        "2018-09-19T02:00:00.000Z",
        "2018-09-19T03:00:00.000Z",
        "2018-09-19T04:00:00.000Z",
        "2018-09-19T05:00:00.000Z",
        "2018-09-19T06:00:00.000Z",
        "2018-09-19T07:00:00.000Z",
        "2018-09-19T08:00:00.000Z",
        "2018-09-19T09:00:00.000Z",
        "2018-09-19T10:00:00.000Z",
      ],
    },
    labels: {
      datetimeFormatter: {
        hour: "hh:mm TT",
      },
    },
  };

  return (
    <div id="chart">
      <ChartCard>
        <OrderTitle>
          <Title>Reports</Title>
          <Image>
            <img src={dot} width={12} />
          </Image>
        </OrderTitle>
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={320}
          width={650}
        />
      </ChartCard>
    </div>
  );
}
