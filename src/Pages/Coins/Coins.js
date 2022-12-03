import React, { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { Bars } from 'react-loader-spinner';
import Card from '../../Components/DataCard/Card';
import useFetch from '../../Context/UseFetch/Usefetch';

const Coins = () => {


  const [count, setCount] = useState(1);


  const { Data, loading, error }= useFetch('coins/markets','get','','',{vs_currency:'usd',order:'market_cap_desc',per_page:100,page:count,sparkline:false})



  return (
    <div class="row m-5">
      {loading? <Bars width={''}></Bars>:
        Data.map((item) => {
          return <Card key={item.id} {...item}></Card>;
        })}

      <div className="container d-flex justify-content-center align-items-center">
        <button className="m-3" onClick={() => setCount(count - 1)}>
        <FaArrowAltCircleLeft></FaArrowAltCircleLeft> 
        </button>
        <button className="m-3" onClick={() => setCount(count + 1)}>
           <FaArrowAltCircleRight></FaArrowAltCircleRight>
        </button>
      </div>
    </div>
  )
}

export default Coins