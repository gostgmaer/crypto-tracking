import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartWithLabel = ({ label, ChartData, dataSetlabel, title }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const labels = label;

  const data = {
    labels,
    datasets: [
      {
        label: dataSetlabel,
        data: ChartData,
        borderColor: "#4c5050",
        borderWidth: 1,
        backgroundColor: "#00000055",
        fill: true,
        pointBorderWidth: 1,
        pointRadius: 1,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChartWithLabel;
