import React, { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaCopy,
  FaShare,
  FaStar,
} from "react-icons/fa";
import { DaysData } from "../COinData";
import { MdNotificationsNone } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import CoinDetailsChart from "../CoinDetailsChart";
import currencyToSymbolMap from "currency-symbol-map/map";
import moment from "moment/moment";
import LineChartWithLabel from "../LineChartWithLabel";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { useGlobalRestApiContext } from "../../../Context/AppContext/GlobalApiCallContext";
import { Box } from "@mui/material";
// import { Data } from "./COinData";

const CoinDetails = () => {
  const {
    cryptoDetails,

    chartData,

    getCoinDetails,

    getMarketChert,

    value,
  } = useGlobalRestApiContext();

  // const [value?.name, setvalue?.name] = useState("USD");
  // const [coinDetails, setCoinDetails] = useState(null);
  const [newloading, setNewloading] = useState(true);
  const [openTab, setOpenTab] = useState(0);
  const [days, setdays] = useState("90");
  const id = useParams().id;
  const currency = Object.entries(currencyToSymbolMap).find(
    (item) => item["0"] === value.code
  );
  console.log(currency);

  const selectDays = (e) => {
    let data = e.target.innerHTML;
    data === "24H" && setdays("1");
    if (data === "7d" || data === "14d" || data === "30d" || data === "90d") {
      data = data.replace("d", "");
      setdays(data);
    } else {
      setdays("max");
    }
  };
  useEffect(() => {
    getMarketChert({ time: days }, id, "coins",'market_chart');
  }, [days, id]);

  useEffect(() => {
    getCoinDetails({}, id);
  }, [id]);

  const CoinTabs = () => {
    return (
      <div className=" col-12 p-3 m-2 rounded bg-light">
        <div className=" d-flex justify-content-between align-items-center">
          {" "}
          <ul className="nav nav-tabs rounded  d-flex justify-content-start align-items-center text-light">
            <li className="nav-item">
              <button
                onClick={() => setOpenTab(0)}
                className={`nav-link m-2 ${openTab === 0 && "active"}`}
                aria-current="page"
              >
                Prices History
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setOpenTab(1)}
                className={`nav-link m-2 ${openTab === 1 && "active"}`}
                aria-current="page"
              >
                Market Caps
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setOpenTab(2)}
                className={`nav-link m-2 ${openTab === 2 && "active"}`}
                aria-current="page"
              >
                Total Volumes History
              </button>
            </li>
          </ul>
          <div>
            <ul className="nav d-flex justify-content-between align-items-center">
              {DaysData?.map((item) => (
                <li
                  key={item}
                  className="nav-item btn border  m-1"
                  onClick={selectDays}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          {openTab === 1 && (
            <div className="col-12">
              <LineChartWithLabel
                label={chartData?.market_caps?.map((item) =>
                  moment(item[0]).format("MM/DD/YYYY")
                )}
                title={"Market Capitalization Data"}
                dataSetlabel={value?.name}
                ChartData={chartData?.market_caps?.map((item) => item[1])}
              ></LineChartWithLabel>
            </div>
          )}
        </div>
        <div>
          {openTab === 0 && (
            <div className="col-12">
              <LineChartWithLabel
                label={chartData?.prices?.map((item) =>
                  moment(item[0]).format("MM/DD/YYYY")
                )}
                title={"Price History Data"}
                dataSetlabel={value?.name}
                ChartData={chartData?.prices?.map((item) => item[1])}
              ></LineChartWithLabel>
            </div>
          )}
        </div>
        <div>
          {openTab === 2 && (
            <div className="col-12">
              <LineChartWithLabel
                label={chartData?.total_volumes?.map((item) =>
                  moment(item[0]).format("MM/DD/YYYY")
                )}
                title={"Total Volumes Data"}
                dataSetlabel={value?.name}
                ChartData={chartData?.total_volumes?.map((item) => item[1])}
              ></LineChartWithLabel>
            </div>
          )}
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
                  <React.Fragment>
                    <span>{currency[1]}</span>
                    {
                      cryptoDetails?.market_data.market_cap[
                        currency[0].toLowerCase()
                      ]
                    }
                  </React.Fragment>
                </p>
              </div>
            </div>
            <div className="col-6 text-start">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  24 Hour Trading Volume
                </h4>
                <p className="font-semibold mb-0">
                  <span>{currency[1]}</span>
                  <span>
                    {" "}
                    {
                      cryptoDetails?.market_data.total_volume[
                        currency[0].toLowerCase()
                      ]
                    }
                  </span>
                </p>
              </div>
            </div>
            <div className="col-6 text-end">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  Fully Diluted Valuation
                </h4>
                <p className="font-semibold mb-0">
                  <span>{currency[1]}</span>
                  <span>
                    {" "}
                    {
                      cryptoDetails?.market_data.fully_diluted_valuation[
                        currency[0].toLowerCase()
                      ]
                    }
                  </span>
                </p>
              </div>
            </div>
            <div className="col-6 text-start">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  Circulating Supply
                </h4>
                <p className="font-semibold mb-0">
                  <span>{currency[1]}</span>
                  <span>
                    {" "}
                    {cryptoDetails?.market_data.circulating_supply.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
            <div className="col-6 text-end">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  24h High
                </h4>
                <p className="font-semibold mb-0">
                  <span>{currency[1]}</span>
                  <span>
                    {" "}
                    {
                      cryptoDetails?.market_data.high_24h[
                        currency[0].toLowerCase()
                      ]
                    }
                  </span>
                </p>
              </div>
            </div>
            <div className="col-6 text-start">
              <div className="border-b align-items-center justify-content-end border-bottom m-2 p-2 text-white">
                <h4 className="text-gray-500 mb-0 dark:text-gray-400 text-sm">
                  24h Low
                </h4>
                <p className="font-semibold mb-0">
                  <span>{currency[1]}</span>
                  <span>
                    {" "}
                    {
                      cryptoDetails?.market_data.low_24h[
                        currency[0].toLowerCase()
                      ]
                    }
                  </span>
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
          About {cryptoDetails?.name} (
          {cryptoDetails?.symbol.toLocaleUpperCase()})
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: cryptoDetails?.description.en }}
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
                href={cryptoDetails?.links?.homepage[0]}
              >
                Official site
              </a>
            </div>
          </div>
          <div>
            <small className="text-gray-600 dark:text-gray-400 font-semibold">
              Community
            </small>
            <div className="grid gap-1 grid-cols-2 flex-wrap d-flex my-1">
              <a
                className="text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1"
                href={cryptoDetails?.links.subreddit_url}
              >
                Reddit
              </a>
              <a
                className="text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1"
                href={`https://www.facebook.com/${cryptoDetails?.links.facebook_username}`}
              >
                Facebook
              </a>
              <a
                className="text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1"
                href={`https://www.twitter.com/${cryptoDetails?.links.twitter_screen_name}`}
              >
                Twitter
              </a>
              <a
                className="text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1"
                href={cryptoDetails?.links.official_forum_url[0]}
              >
                Forum
              </a>
            </div>
          </div>
          <div>
            <small className="text-gray-600 dark:text-gray-400 font-semibold">
              Source code
            </small>
            <div className="my-1 d-flex center flex-wrap">
              {cryptoDetails?.links.repos_url.github.map((item, index) => {
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
            <div className=" d-flex align-items-center justify-content-start">
              <span className=" me-2">API id: </span>
              <span className=" btn text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1">
                {cryptoDetails?.id}
                <FaCopy></FaCopy>
              </span>
            </div>
          </div>
          <div className=" my-1">
            <div className=" d-flex align-items-center justify-content-start">
              <span className=" me-2">Tags: </span>
              <span className="text-decoration-none rounded-2 opacity-75 bg-light m-1 link-dark px-3 py-1">
                {cryptoDetails?.categories[0]}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const InfoCard = () => {
    return (
      <div
        style={{ gap: "10px" }}
        className=" d-flex col-12 justify-content-between"
      >
        <div className="d-block my-4 col-8  text-white p-3 text-start">
          <div className=" mt-1 d-flex align-items-center">
            <img
              className="w-8 mr-2 rounded-circle"
              src={cryptoDetails?.image.small}
              alt={cryptoDetails?.name}
            />
            <h2 className="font-bold text-xl">
              {cryptoDetails?.name}({cryptoDetails?.symbol.toUpperCase()})
            </h2>
          </div>
          <div className="mt-3 d-flex gap-1  justify-content-start align-items-center">
            <h3 className="font-bold text-3xl ">
              <span>{currency[1]}</span>
              {
                cryptoDetails?.market_data.current_price[
                  currency[0].toLowerCase()
                ]
              }
            </h3>
            <Box
              className="d-flex"
              color={
                cryptoDetails?.market_data?.price_change_percentage_24h < 0
                  ? "red"
                  : "green"
              }
            >
              {cryptoDetails?.market_data?.price_change_percentage_24h < 0 ? (
                <FaArrowDown></FaArrowDown>
              ) : (
                <FaArrowUp></FaArrowUp>
              )}
              <span className="text-green-600 font-semibold text-[18px]">
                {cryptoDetails?.market_data.price_change_percentage_24h}%
              </span>
            </Box>
          </div>
          <div className=" mt-1 d-flex align-items-center">
            <small>1 {cryptoDetails?.symbol.toLocaleUpperCase()}</small>
          </div>
          <div className="mt-1 d-flex align-items-center">
            <button type="button" className="btn btn-light m-1">
              <FaShare></FaShare>
            </button>
            <button type="button" className="btn btn-light m-1">
              <MdNotificationsNone></MdNotificationsNone>
            </button>
            <button type="button" className="btn btn-light m-1">
              <FaStar></FaStar>
            </button>
          </div>
          <div className="mt-1 col-10 align-items-center">
          <div className="allTime d-flex justify-content-between align-items-center">
            <span> {currency[1]}{ cryptoDetails?.market_data.atl[
                      currency[0].toLowerCase()
                    ]}</span>
                    <span> {currency[1]}{ cryptoDetails?.market_data.current_price[
                      currency[0].toLowerCase()
                    ]}</span>
                    <span>{currency[1]}{ cryptoDetails?.market_data.ath[
                      currency[0].toLowerCase()
                    ]}</span>
          </div>
            <input
              type="range"
              value={
                cryptoDetails?.market_data.current_price[
                  currency[0].toLowerCase()
                ]
              }
              className="form-range range-filed-data col-10"
              max={cryptoDetails?.market_data.ath[currency[0].toLowerCase()]}
              id="customRange"
              onChange={() => {}}
              min={0}
            />
            <div className=" d-flex  justify-content-between align-items-center">
              <div className="">
                <span className="no-wrap">
                  <span>{currency[1]}</span>{" "}
                  {
                    cryptoDetails?.market_data.low_24h[
                      currency[0].toLowerCase()
                    ]
                  }
                </span>
              </div>
              <div className="">24H Range</div>
              <div className="text-right">
                <span className="no-wrap">
                  <span>{currency[1]}</span>{" "}
                  {
                    cryptoDetails?.market_data.high_24h[
                      currency[0].toLowerCase()
                    ]
                  }
                </span>
              </div>
            </div>
          </div>
          <CoinDetailsChart
            myData={cryptoDetails?.market_data.sparkline_7d.price}
            title={""}
          ></CoinDetailsChart>
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
          <Link className="btn btn-primary btn-sm " to="/" role="button">
            Home
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row custom-skiliton">
        <Sidebar></Sidebar>

        <div className="col-md-9 ml-sm-auto p-0 col-lg-10 ">
          <article className="  p-0 rounded-4 container">
            {cryptoDetails === null ? (
              <NoCoinData></NoCoinData>
            ) : (
              <div className=" container bg-black py-1">
                <React.Fragment>{<InfoCard />}</React.Fragment>
                <CoinTabs />
                <React.Fragment>
                  <MarketDataContainer />
                </React.Fragment>

                <div className=" text-start">
                  <Description></Description>
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
