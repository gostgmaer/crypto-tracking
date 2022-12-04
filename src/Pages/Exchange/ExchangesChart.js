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


const ExchangeCharts= ( {title,label,ChartData,dataSetlabel} )=>{

 
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
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
            borderColor: '#4c5050',
            borderWidth:1,
            backgroundColor: '#00000055',
            fill:true,
            pointBorderWidth:1,pointRadius:1
          }
        ],
      };



   
    return <Line  data={data} options={options} />;
  


}

  export default  ExchangeCharts


