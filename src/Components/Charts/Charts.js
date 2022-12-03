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
       display:false
      }, tooltip: {
        enabled: false,
        TooltipItem:{
          enabled:false
        }
      }
      
     
    },
   
    scales: {
      y: {
          display: false // Hide Y axis labels
      },
      x: {
          display: false // Hide X axis labels
      }
  }  
  };
  

// const  options: {
//     legend: {
//         display: false
//     },
//     tooltips: {
//         callbacks: {
//            label: function(tooltipItem) {
//                   return tooltipItem.yLabel;
//            }
//         }
//     }
// }

  const data = {
    labels: myData,
    datasets: [
      {
      
        backgroundColor: "#11182755",
        borderColor: "#A1C9D7",
        data: myData,
        fill:true
      },
    ],
  };


   
    return <Line  data={data} options={options} />;
  


}
  
  export default MYChart