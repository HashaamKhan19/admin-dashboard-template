import { useTheme } from "@/providers/theme-provider";
import Chart from "react-apexcharts";

const LineChart = () => {
  const { theme } = useTheme();

  const seriesData = [
    {
      name: "Users",
      data: [40, 11, 95, 131, 49, 162, 39, 91, 148, 100, 150, 200],
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
    title: {
      text: "Total Users per month",
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
      colors: "#06BAFF",
    },
    legend: {
      show: true,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  return (
    <div>
      <div id="chart">
        <Chart
          options={optionsData}
          series={seriesData}
          type="line"
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

export default LineChart;
