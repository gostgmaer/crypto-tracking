import React from 'react';
import {
  
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Line } from 'react-chartjs-2';
import Chart from "chart.js/auto";

const myarray = Array.from(Array(10).keys())
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const MYChart= ( {title,myData} )=>{

 

 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  



  const data = {
    labels: myarray,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#f1f1f1",
        borderColor: "#000",
        data: myarray,
        fill:true
      },
    ],
  };


   
    return <Line  data={data} options={options} />;
  


}
  
  export default MYChart