import { useTabPanel } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useFetch from "../../Context/UseFetch/Usefetch";
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
// import "./style.scss";
// import { DaysData } from "./COinData";
import {} from "react-icons/";
import { MdNotificationsNone } from "react-icons/md";
import { Bars, Circles, TailSpin } from "react-loader-spinner";
import MYChart from "../../Components/Charts/Charts";
// import CoinDetailsChart from "./CoinDetailsChart";
import InvokeAPI from "../../Utils/ApiCall/InvokeAPI";
import moment from "moment/moment";
import ExchangeCharts from "./ExchangesChart";

const ExchangeDetails = () => {
  const [currency, setCurrency] = useState("USD");
  const [checkNUll, setcheckNUll] = useState(NaN);
  const [coinDetails, setCoinDetails] = useState();
  const [newloading, setNewloading] = useState(true);
  const [openTab, setOpenTab] = useState(0);
  const [days, setdays] = useState(365);
  const id = useParams().id;
  const [exchangeDetails, setExchangeDetails] = useState();

  const DaysData = [
    "24H",
    "7d",
    "14d",
    "30d",
    "90d",
    "200d",
    "365d",
    "1000d",
    "max",
  ];

  const { Data, loading, error } = useFetch(`exchanges/${id}`, "get", "", "", {
    tickers: true,
    market_data: true,
    community_data: true,
    developer_data: true,
    sparkline: true,
  });

  const exchangeMarket = async () => {
    const res = await InvokeAPI(`exchanges/${id}/volume_chart`, "get", "", "", {
      days: days,
    });
    setExchangeDetails(res);
    setNewloading(false);
  };

  let marketData;
  useEffect(() => {
    //  marketData = Data?.market_data;
    exchangeMarket();
  }, [id, days, currency]);

  const selectDays = (e) => {
    let data = e.target.innerHTML;
    data === "24H" && setdays(1);
    if (
      data === "7d" ||
      data === "14d" ||
      data === "30d" ||
      data === "90d" ||
      data === "200d" ||
      data === "365d" ||
      data === "1000d"
    ) {
      data = data.replace("d", "");
      // console.log(data);
      setdays(data);
    }
    data === "max" && setdays("2000");
    //  console.log(data);
    console.log(days);
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
                  24 Hours Trade Volumes
                </h4>
                <p className="font-semibold p-0 mb-0">
                  {currency === "USD" ? (
                    <React.Fragment>
                      <FaDollarSign></FaDollarSign>{" "}
                      {Data?.trade_volume_24h_btc.toFixed(2)}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <FaRupeeSign></FaRupeeSign>{" "}
                      {Data?.trade_volume_24h_btc.toFixed(2)}
                    </React.Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="col-6 text-start">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  24 Hours Normalization Volume
                </h4>
                <p className="font-semibold mb-0">
                  {" "}
                  {currency === "USD" ? (
                    <React.Fragment>
                      <FaDollarSign></FaDollarSign>{" "}
                      {Data?.trade_volume_24h_btc_normalized.toFixed(2)}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <FaRupeeSign></FaRupeeSign>{" "}
                      {Data?.trade_volume_24h_btc_normalized.toFixed(2)}
                    </React.Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="col-6 text-end">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  Trust Score
                </h4>
                <p className="font-semibold mb-0">
                  {currency === "USD" ? (
                    <React.Fragment>
                      <FaTrophy></FaTrophy> {Data?.trust_score}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <FaTrophy></FaTrophy> {Data.trust_score}
                    </React.Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="col-6 text-start">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  Trust Score Rank
                </h4>
                <p className="font-semibold mb-0">
                  {currency === "USD" ? (
                    <React.Fragment>
                      <FaDollarSign></FaDollarSign> {Data?.trust_score_rank}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <FaRupeeSign></FaRupeeSign> {Data?.trust_score_rank}
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

  const Details = () => {
    return (
      <div className="my-4 col-3 text-white text-start ">
        <h2 className="text-xl font-semibold">Info</h2>
        <div className="my-1">
          <div className="my-2">
            <small className="text-gray-600 dark:text-gray-400 font-semibold">
              Website
            </small>
            <div className="my-1">
              <a
                className="text-decoration-none rounded-2 bg-light link-dark px-3 py-1"
                href={Data?.url}
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
                href={`${Data?.facebook_url}`}
              >
                Facebook
              </a>
              <a
                className="text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1"
                href={`https://www.twitter.com/${Data?.twitter_handle}`}
              >
                Twitter
              </a>
            </div>
          </div>

          <div className=" my-1 ">
            <div class=" d-flex align-items-center justify-content-start">
              <span className=" me-2">Centralized: </span>
              <span className=" btn text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1">
                {Data?.centralized ? "True" : "False"}
              </span>
            </div>
          </div>
          <div className=" my-1">
            <div class=" d-flex align-items-center justify-content-start">
              <span className=" me-2">Country: </span>
              <span className="text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1">
                {Data?.country}
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
        <div className="d-block my-4 col-5  text-white p-3 text-start">
          <div className=" mt-1 d-flex align-items-center">
            <img
              className="w-8 mr-2 rounded-circle"
              src={Data.image}
              alt={Data.name}
            />
            <h2 className="font-bold text-xl">{Data.name}</h2>
          </div>
          <div className="mt-3 d-flex  justify-content-start align-items-center">
            <h5 className="font-bold text-3xl">
              Trading incentive:{" "}
              {Data?.has_trading_incentive ? "True" : "False"}
            </h5>
          </div>
          <div className=" mt-1 d-flex align-items-center">
            <small>Established {Data.year_established}</small>
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
       
        </div>
        <div className="col-2"></div>
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

  const ExchangesData = () => {
    return (
      <div className=" col-12 p-3 m-2 rounded bg-light">
        <div className=" d-flex justify-content-between align-items-center">
          <div>
            <span className=" h4">{Data?.name} Volume Chart </span>
          </div>
          <div>
            <ul class="nav d-flex justify-content-between align-items-center">
              {DaysData?.map((item) => (
                <li class="nav-item btn border  m-1" onClick={selectDays}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="col-12">
            {loading ? (
              <TailSpin width={""}></TailSpin>
            ) : (
              <ExchangeCharts
                label={exchangeDetails?.map((item) =>
                  moment(item[0]).format("MM/DD/YYYY")
                )}
                title={"Volumes Data Charts"}
                dataSetlabel={currency}
                ChartData={exchangeDetails?.map((item) => item[1])}
              ></ExchangeCharts>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <article className="  rounded-4 mb-5 container bg-black">
        <div className="rounded-div mt-6 py-4">
          <React.Fragment>
            {loading ? <TailSpin width={""}></TailSpin> : <InfoCard />}
          </React.Fragment>
          <ExchangesData></ExchangesData>
          <React.Fragment>
            {loading ? (
              <TailSpin width={""}></TailSpin>
            ) : (
              <MarketDataContainer />
            )}{" "}
          </React.Fragment>
        </div>
        {Data === null && <NoCoinData></NoCoinData>}
      </article>
    </div>
  );
};

export default ExchangeDetails;
