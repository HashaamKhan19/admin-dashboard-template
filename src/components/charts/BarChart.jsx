import { useTheme } from "@/providers/theme-provider";
import Chart from "react-apexcharts";

const BarChart = () => {
  const { theme } = useTheme();
  const seriesData = [
    {
      name: "Bugs",
      data: [40, 11, 95, 131, 49, 162, 39],
    },
  ];

  const optionsData = {
    chart: {
      height: 350,
      type: "line",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      fontFamily: "Poppins, sans-serif",
      foreColor: theme === "dark" ? "#fff" : "#333",
    },
    tooltip: {
      theme: theme === "dark" ? "dark" : "light",
    },
    colors: ["#f44336"],
    title: {
      text: "Bugs Reported per Week",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "semi-bold",
        fontFamily: "Poppins, sans-serif",
        color: theme === "dark" ? "#fff" : "#333",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: theme === "dark" ? "#fff" : "#030712",
    },
    legend: {
      show: true,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  };

  return (
    <div>
      <div id="chart">
        <Chart
          options={optionsData}
          series={seriesData}
          type="bar"
          height={350}
          style={{
            padding: 20,
          }}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarChart;
