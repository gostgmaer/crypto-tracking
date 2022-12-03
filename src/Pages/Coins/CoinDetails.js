import React, { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaDollarSign,
  FaRupeeSign,
  FaTrophy,
} from "react-icons/fa";
import { Bars, Circles, TailSpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import MYChart from "../../Components/Charts/Charts";
import useFetch from "../../Context/UseFetch/Usefetch";
// import { Data } from "./COinData";

const CoinDetails = () => {
  const [currency, setCurrency] = useState("USD");
  const [checkNUll, setcheckNUll] = useState(NaN);

  const id = useParams().id;

  const { Data, loading, error } = useFetch(`coins/${id}`, "get", "", "", {
    tickers: true,
    market_data: true,
    community_data: true,
    developer_data: true,
    sparkline: true,
  });
  let marketData
useEffect(()=>{
   marketData = Data?.market_data;
},[Data])

  const MarketDataContainer = ()=>{
    return <React.Fragment>  <div class="container">
    <div class="row">
      <div class="col-6  text-end">
      <div class="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
      <h4 class="text-gray-500 mb-0 dark:text-gray-400 text-sm">Market Cap</h4>
      <p class="font-semibold p-0 mb-0">
        {currency === "USD" ? (
          <React.Fragment>
            <FaDollarSign></FaDollarSign>{" "}
            {Data.market_data.market_cap.usd}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FaRupeeSign></FaRupeeSign> {Data.market_data.market_cap.inr}
          </React.Fragment>
        )}
      </p>
    </div>
      </div>
      <div class="col-6 text-start">
      <div class="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
      <h4 class="text-gray-500 mb-0 dark:text-gray-400 text-sm">
        24 Hour Trading Volume
      </h4>
      <p class="font-semibold mb-0"> {currency === "USD" ? (
          <React.Fragment>
            <FaDollarSign></FaDollarSign>{" "}
            {Data.market_data.total_volume.usd}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FaRupeeSign></FaRupeeSign> {Data.market_data.total_volume.inr}
          </React.Fragment>
        )}</p>
    </div>
      </div>
      <div class="col-6 text-end">
      <div class="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
      <h4 class="text-gray-500 mb-0 dark:text-gray-400 text-sm">
        Fully Diluted Valuation
      </h4>
      <p class="font-semibold mb-0">{currency === "USD" ? (
          <React.Fragment>
            <FaDollarSign></FaDollarSign>{" "}
            {Data.market_data.fully_diluted_valuation.usd}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FaRupeeSign></FaRupeeSign> {Data.market_data.fully_diluted_valuation.inr}
          </React.Fragment>
        )}</p>
    </div>
      </div>
      <div class="col-6 text-start">
      <div class="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
      <h4 class="text-gray-500 mb-0 dark:text-gray-400 text-sm">
        Circulating Supply
      </h4>
      <p class="font-semibold mb-0">{currency === "USD" ? (
          <React.Fragment>
            <FaDollarSign></FaDollarSign>{" "}
            {Data.market_data.circulating_supply}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FaRupeeSign></FaRupeeSign> {Data.market_data.circulating_supply}
          </React.Fragment>
        )}</p>
    </div>
      </div>
      <div class="col-6 text-end">
      <div class="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
      <h4 class="text-gray-500 mb-0 dark:text-gray-400 text-sm">24h High</h4>
      <p class="font-semibold mb-0">{currency === "USD" ? (
          <React.Fragment>
            <FaDollarSign></FaDollarSign>{" "}
            {Data.market_data.high_24h.usd}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FaRupeeSign></FaRupeeSign> {Data.market_data.high_24h.inr}
          </React.Fragment>
        )}</p>
    </div>
      </div>
      <div class="col-6 text-start">
      <div class="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
      <h4 class="text-gray-500 mb-0 dark:text-gray-400 text-sm">24h Low</h4>
      <p class="font-semibold mb-0">{currency === "USD" ? (
          <React.Fragment>
            <FaDollarSign></FaDollarSign>{" "}
            {Data.market_data.low_24h.usd}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FaRupeeSign></FaRupeeSign> {Data.market_data.low_24h.inr}
          </React.Fragment>
        )}</p>
    </div>
      </div>
      

      
    </div>
  </div></React.Fragment>
  }
const Description = ()=>{
  return <React.Fragment>   <h1 class="text-2xl font-semibold mt-8 mb-4">
  About {Data.name} ({Data.symbol.toLocaleUpperCase()})
</h1>
<div
  dangerouslySetInnerHTML={{ __html: Data.description.en }}
  style={{ whiteSpace: "pre-wrap" }}
  class="text-break text-light text-start"
></div></React.Fragment>
}

const InfoCard = ()=>{
 return  <div class=" d-flex justify-content-between">
 <div class="d-block my-4  text-white text-start">
   <div class=" mt-1 d-flex align-items-center">
     <img class="w-8 mr-2" src={Data.image.small} alt={Data.name} />
     <h2 class="font-bold text-xl">
       {Data.name}({Data.symbol.toUpperCase()})
     </h2>
   </div>
   <div class="mt-3 d-flex  justify-content-start align-items-center">
     <h1 class="font-bold text-3xl">
       {Data.market_data.current_price.usd}
     </h1>
     {Data?.market_data?.price_change_percentage_24h < 0 ? (
       <div class="d-flex text-danger">
         <FaArrowDown></FaArrowDown>
         <span class="text-green-600 font-semibold text-[18px]">
           {Data?.market_data.price_change_percentage_24h}%
         </span>
       </div>
     ) : (
       <div class=" d-flex text-success ">
         <FaArrowUp ></FaArrowUp>
         <span class="text-green-600 font-semibold text-[18px]">
           {Data?.market_data.market_cap_change_percentage_24h}%
         </span>
       </div>
     )}
   </div>
   <small>1 {Data.symbol.toLocaleUpperCase()}</small>
   <div class="mt-4"></div>
 </div>
 <div class="my-4 text-white text-start ">
   <h2 class="text-xl font-semibold">Info</h2>
   <div class="my-1">
     <div class="my-2">
       <small class="text-gray-600 dark:text-gray-400 font-semibold">
         Website
       </small>
       <div class="my-1">
         <a
           class="bg-gray-100 dark:bg-gray-700 rounded-xl text-center px-3 py-1 text-sm font-semibold"
           href="http://www.bitcoin.org"
         >
           Official site
         </a>
       </div>
     </div>
     <div>
       <small class="text-gray-600 dark:text-gray-400 font-semibold">
         Community
       </small>
       <div class="grid gap-1 grid-cols-2 my-1">
         <a
           class="bg-gray-100 dark:bg-gray-700 rounded-xl text-center px-3 py-1 text-sm font-semibold"
           href="https://www.reddit.com/r/Bitcoin/"
         >
           Reddit
         </a>
         <a
           class="bg-gray-100 dark:bg-gray-700 rounded-xl text-center px-3 py-1 text-sm font-semibold"
           href="https://www.facebook.com/bitcoins"
         >
           Facebook
         </a>
         <a
           class="bg-gray-100 dark:bg-gray-700 rounded-xl text-center px-3 py-1 text-sm font-semibold"
           href="https://www.twitter.com/bitcoin"
         >
           Twitter
         </a>
         <a
           class="bg-gray-100 dark:bg-gray-700 rounded-xl text-center px-3 py-1 text-sm font-semibold"
           href="https://bitcointalk.org/"
         >
           Forum
         </a>
       </div>
     </div>
     <div>
       <small class="text-gray-600 dark:text-gray-400 font-semibold">
         Source code
       </small>
       <div class="my-1">
         <a
           class="bg-gray-100 dark:bg-gray-700 rounded-xl text-center px-3 py-1 text-sm font-semibold"
           href="https://github.com/bitcoin/bitcoin"
         >
           Github
         </a>
       </div>
     </div>
   </div>
 </div>
</div>
}

  const NoCoinData = ()=>{

   
    return <div class="card text-center">
    <div class="card-header">
      No Data Found
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a class="btn btn-primary btn-sm " href="/" role="button">Home</a>
    </div>
   
  </div>
  }

  return (
    <article className="  rounded-4 mb-5 container bg-black">
      <div class="rounded-div mt-6 py-4">
       <React.Fragment>{loading?<TailSpin></TailSpin>:<InfoCard/>}</React.Fragment>

       <React.Fragment>{loading?<Circles width={''}></Circles>: <MarketDataContainer/>} </React.Fragment>
     
        <div className=" text-start">
                {loading?<Bars width={''}></Bars>:<Description></Description>}
        </div>
      </div>
      {  Data===null&&<NoCoinData></NoCoinData>}
    </article>
  );
};

export default CoinDetails;
