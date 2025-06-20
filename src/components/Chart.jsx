import ReactApexChart from "react-apexcharts";

export default function Chart() {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Sale", "Distribute", "Return"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [44, 32, 41,];

  return (
    <div>
      <h3>Analytics</h3>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={380}
      />
    </div>
  );
}
