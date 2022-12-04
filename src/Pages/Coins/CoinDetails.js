import React, { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaCopy,
  FaDollarSign,
  FaRupeeSign,
  FaShare,
  FaTrophy,
  FaStar,
} from "react-icons/fa";
import "./style.scss";
import { DaysData } from "./COinData";
import {} from "react-icons/";
import { MdNotificationsNone } from "react-icons/md";
import { Bars, Circles, TailSpin } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import MYChart from "../../Components/Charts/Charts";
import useFetch from "../../Context/UseFetch/Usefetch";
import CoinDetailsChart from "./CoinDetailsChart";
import InvokeAPI from "../../Utils/ApiCall/InvokeAPI";
import moment from "moment/moment";
import LineChartWithLabel from "./LineChartWithLabel";
// import { Data } from "./COinData";

const CoinDetails = () => {
  const [currency, setCurrency] = useState("USD");
  const [checkNUll, setcheckNUll] = useState(NaN);
  const [coinDetails, setCoinDetails] = useState();
  const [newloading, setNewloading] = useState(true);
  const [openTab, setOpenTab] = useState(0);
  const [days, setdays] = useState(90);
  const id = useParams().id;


  const { Data, loading, error } = useFetch(`coins/${id}`, "get", "", "", {
    tickers: true,
    market_data: true,
    community_data: true,
    developer_data: true,
    sparkline: true,
  });


    const selectDays = (e)=>{
      let data = e.target.innerHTML
      data==='24H'&&setdays(1)
      if (data==='7d'||data==='14d'||data==='30d'||data==='90d') {
        data = data.replace('d', '');
       // console.log(data);
        setdays(data)
      }
      data==='max'&&setdays('max')
    //  console.log(data);
      console.log(days);
    }
  const coinMarket = async () => {
    const res = await InvokeAPI(`coins/${id}/market_chart`, "get", "", "", {
      vs_currency: currency,
      days: days,
      interval: "daily",
    });
    setCoinDetails(res);
    setNewloading(false);
  };

  let marketData;
  useEffect(() => {
    //  marketData = Data?.market_data;
    coinMarket();
  }, [id,days,currency]);

  // coinDetails?.market_caps?.forEach(element => {
  // element[0]= moment(element[0]).format("MM/DD/YYYY");
  // console.log(element)})

  const CoinTabs = () => {
    return (
     <div className=" col-12 p-3 m-2 rounded bg-light">
      <div className=" d-flex justify-content-between align-items-center"> <ul className="nav nav-tabs rounded  d-flex justify-content-start align-items-center text-light">
        <li class="nav-item">
          <button onClick={()=>setOpenTab(0)} className={`nav-link m-2 ${openTab===0&&'active'}`} aria-current="page" >
          Prices History
          </button>
        </li>
        <li class="nav-item">
        <button onClick={()=>setOpenTab(1)} className={`nav-link m-2 ${openTab===1&&'active'}`} aria-current="page" >
        Market Caps
          </button>
        </li>
        <li class="nav-item">
        <button onClick={()=>setOpenTab(2)} className={`nav-link m-2 ${openTab===2&&'active'}`} aria-current="page" >
        Total Volumes History
          </button>
        </li>
       
      </ul>
      <div>
        <ul class="nav d-flex justify-content-between align-items-center">
          {DaysData?.map((item)=><li class="nav-item btn border  m-1" onClick={selectDays}>{item}</li>)}
          
         
        </ul>
        </div>
      </div>
      <div>
      {openTab===1&& <div className="col-12">
           
           {loading ? (
             <TailSpin width={""}></TailSpin>
           ) : (
             <LineChartWithLabel
               label={coinDetails?.market_caps?.map((item) =>
                 moment(item[0]).format("MM/DD/YYYY")
               )} title={'Market Capitalization Data'} dataSetlabel={currency}
               ChartData={coinDetails?.market_caps?.map((item) => item[1])}
             ></LineChartWithLabel>
           )}
         </div>}
      </div>
      <div>
      {openTab===0&& <div className="col-12">
            
            {loading ? (
              <TailSpin width={""}></TailSpin>
            ) : (
              <LineChartWithLabel
                label={coinDetails?.prices?.map((item) =>
                  moment(item[0]).format("MM/DD/YYYY")
                )} title={'Price History Data'} dataSetlabel={currency}
                ChartData={coinDetails?.prices?.map((item) => item[1])}
              ></LineChartWithLabel>
            )}
          </div>}
      </div>
      <div>
      {openTab===2&&  <div className="col-12">
        
        {loading ? (
          <TailSpin width={""}></TailSpin>
        ) : (
          <LineChartWithLabel
            label={coinDetails?.total_volumes?.map((item) =>
              moment(item[0]).format("MM/DD/YYYY")
            )} title={'Total Volumes Data'} dataSetlabel={currency}
            ChartData={coinDetails?.total_volumes?.map((item) => item[1])}
          ></LineChartWithLabel>
        )}
      </div>}
      </div>
     
     </div>
    );
  };

  const MarketDataContainer = () => {
    return (
      <React.Fragment>
        {" "}
        <div className="container">
          <div className="row">
            <div className="col-6  text-end">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  Market Cap
                </h4>
                <p className="font-semibold p-0 mb-0">
                  {currency === "USD" ? (
                    <React.Fragment>
                      <FaDollarSign></FaDollarSign>{" "}
                      {Data.market_data.market_cap.usd}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <FaRupeeSign></FaRupeeSign>{" "}
                      {Data.market_data.market_cap.inr}
                    </React.Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="col-6 text-start">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  24 Hour Trading Volume
                </h4>
                <p className="font-semibold mb-0">
                  {" "}
                  {currency === "USD" ? (
                    <React.Fragment>
                      <FaDollarSign></FaDollarSign>{" "}
                      {Data.market_data.total_volume.usd}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <FaRupeeSign></FaRupeeSign>{" "}
                      {Data.market_data.total_volume.inr}
                    </React.Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="col-6 text-end">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  Fully Diluted Valuation
                </h4>
                <p className="font-semibold mb-0">
                  {currency === "USD" ? (
                    <React.Fragment>
                      <FaDollarSign></FaDollarSign>{" "}
                      {Data.market_data.fully_diluted_valuation.usd}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <FaRupeeSign></FaRupeeSign>{" "}
                      {Data.market_data.fully_diluted_valuation.inr}
                    </React.Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="col-6 text-start">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  Circulating Supply
                </h4>
                <p className="font-semibold mb-0">
                  {currency === "USD" ? (
                    <React.Fragment>
                      <FaDollarSign></FaDollarSign>{" "}
                      {Data.market_data.circulating_supply}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <FaRupeeSign></FaRupeeSign>{" "}
                      {Data.market_data.circulating_supply}
                    </React.Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="col-6 text-end">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  24h High
                </h4>
                <p className="font-semibold mb-0">
                  {currency === "USD" ? (
                    <React.Fragment>
                      <FaDollarSign></FaDollarSign>{" "}
                      {Data.market_data.high_24h.usd}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <FaRupeeSign></FaRupeeSign>{" "}
                      {Data.market_data.high_24h.inr}
                    </React.Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="col-6 text-start">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  24h Low
                </h4>
                <p className="font-semibold mb-0">
                  {currency === "USD" ? (
                    <React.Fragment>
                      <FaDollarSign></FaDollarSign>{" "}
                      {Data.market_data.low_24h.usd}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <FaRupeeSign></FaRupeeSign> {Data.market_data.low_24h.inr}
                    </React.Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
  const Description = () => {
    return (
      <React.Fragment>
        {" "}
        <h1 className="text-2xl font-semibold mt-8 mb-4">
          About {Data.name} ({Data.symbol.toLocaleUpperCase()})
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: Data.description.en }}
          style={{ whiteSpace: "pre-wrap" }}
          className="text-break text-light text-start"
        ></div>
      </React.Fragment>
    );
  };

  const Details = () => {
    return (
      <div className="my-4 text-white text-start ">
        <h2 className="text-xl font-semibold">Info</h2>
        <div className="my-1">
          <div className="my-2">
            <small className="text-gray-600 dark:text-gray-400 font-semibold">
              Website
            </small>
            <div className="my-1">
              <a
                className="text-decoration-none rounded-2 bg-light link-dark px-3 py-1"
                href={Data?.links?.homepage[0]}
              >
                Official site
              </a>
            </div>
          </div>
          <div>
            <small className="text-gray-600 dark:text-gray-400 font-semibold">
              Community
            </small>
            <div className="grid gap-1 grid-cols-2 my-1">
              <a
                className="text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1"
                href={Data.links.subreddit_url}
              >
                Reddit
              </a>
              <a
                className="text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1"
                href={`https://www.facebook.com/${Data.links.facebook_username}`}
              >
                Facebook
              </a>
              <a
                className="text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1"
                href={`https://www.twitter.com/${Data.links.twitter_screen_name}`}
              >
                Twitter
              </a>
              <a
                className="text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1"
                href={Data.links.official_forum_url[0]}
              >
                Forum
              </a>
            </div>
          </div>
          <div>
            <small className="text-gray-600 dark:text-gray-400 font-semibold">
              Source code
            </small>
            <div className="my-1">
              {Data?.links.repos_url.github.map((item, index) => {
                return (
                  <a
                    key={index}
                    className="text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1"
                    href={item}
                  >
                    Github
                  </a>
                );
              })}
            </div>
          </div>
          <div className=" my-1">
            <div class=" d-flex align-items-center justify-content-start">
              <span className=" me-2">API id: </span>
              <span className=" btn text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1">
                {Data?.id}
                <FaCopy></FaCopy>
              </span>
            </div>
          </div>
          <div className=" my-1">
            <div class=" d-flex align-items-center justify-content-start">
              <span className=" me-2">Tags: </span>
              <span className="text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1">
                {Data?.categories[0]}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const InfoCard = () => {
    return (
      <div className=" d-flex col-12 justify-content-between">
        <div className="d-block my-4 col-4  text-white p-3 text-start">
          <div className=" mt-1 d-flex align-items-center">
            <img
              className="w-8 mr-2 rounded-circle"
              src={Data.image.small}
              alt={Data.name}
            />
            <h2 className="font-bold text-xl">
              {Data.name}({Data.symbol.toUpperCase()})
            </h2>
          </div>
          <div className="mt-3 d-flex  justify-content-start align-items-center">
            <h1 className="font-bold text-3xl">
              {Data.market_data.current_price.usd}
            </h1>
            {Data?.market_data?.price_change_percentage_24h < 0 ? (
              <div className="d-flex text-danger">
                <FaArrowDown></FaArrowDown>
                <span className="text-green-600 font-semibold text-[18px]">
                  {Data?.market_data.price_change_percentage_24h}%
                </span>
              </div>
            ) : (
              <div className=" d-flex text-success ">
                <FaArrowUp></FaArrowUp>
                <span className="text-green-600 font-semibold text-[18px]">
                  {Data?.market_data.market_cap_change_percentage_24h}%
                </span>
              </div>
            )}
          </div>
          <div className=" mt-1 d-flex align-items-center">
            <small>1 {Data.symbol.toLocaleUpperCase()}</small>
          </div>
          <div className="mt-1 d-flex align-items-center">
            <button type="button" class="btn btn-light m-1">
              <FaShare></FaShare>
            </button>
            <button type="button" class="btn btn-light m-1">
              <MdNotificationsNone></MdNotificationsNone>
            </button>
            <button type="button" class="btn btn-light m-1">
              <FaStar></FaStar>
            </button>
          </div>
          <div className="mt-1 align-items-center">
            <input
              type="range"
              value={
                Data.market_data.high_24h.usd - Data.market_data.low_24h.usd
              }
              class="form-range range-filed-data col-8"
              max={1000}
              id="customRange"
              onChange={() => {}}
              min={0}
            />
            <div class=" d-flex col-8 justify-content-between align-items-center">
              <div class="">
                <span class="no-wrap">${Data.market_data.low_24h.usd}</span>
              </div>
              <div class="">24H Range</div>
              <div class="text-right">
                <span class="no-wrap">${Data.market_data.high_24h.usd}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          {" "}
          {loading ? (
            <TailSpin width={""}></TailSpin>
          ) : (
            <CoinDetailsChart
              myData={Data?.market_data.sparkline_7d.price}
            ></CoinDetailsChart>
          )}
        </div>
        <Details></Details>
      </div>
    );
  };

  const NoCoinData = () => {
    return (
      <div className="card text-center">
        <div className="card-header">No Data Found</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a className="btn btn-primary btn-sm " href="/" role="button">
            Home
          </a>
        </div>
      </div>
    );
  };

  return (
    <article className="  rounded-4 mb-5 container bg-black">
      <div className="rounded-div mt-6 py-4">
        <React.Fragment>
          {loading ? <TailSpin width={""}></TailSpin> : <InfoCard />}
        </React.Fragment>
        <CoinTabs/>
        <React.Fragment>
          {loading ? <TailSpin width={""}></TailSpin> : <MarketDataContainer />}{" "}
        </React.Fragment>

        <div className=" text-start">
          {loading ? (
            <TailSpin width={""}></TailSpin>
          ) : (
            <Description></Description>
          )}
        </div>
      
      </div>
      {Data === null && <NoCoinData></NoCoinData>}
    </article>
  );
};

export default CoinDetails;
