import React from 'react';
import {
    Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Line } from 'react-chartjs-2';


const myarray = Array.from(Array(10).keys())
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const CoinDetailsChart= ( {title,myData} )=>{

 

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
  

// const  options2: {
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
        backgroundColor: "#ffffff50",
        borderColor: "#A1C9D7",
        data: myData,
        pointBorderWidth:1,pointRadius:0,
        borderWidth:0,
        fill:true
      },
    ],
  };


   
    return <Line  data={data} options={options} />;
  


}

  export default  CoinDetailsChart


