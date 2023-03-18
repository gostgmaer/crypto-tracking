import { Autocomplete, TextField } from "@mui/material";
import { currencies } from "currencies.json";
import React, { Fragment, useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import MYChart from "../../Components/Charts/Charts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useGlobalRestApiContext } from "../../Context/AppContext/GlobalApiCallContext";
import getSymbolFromCurrency from 'currency-symbol-map'
import useFetch from "../../Context/UseFetch/Usefetch";
import InvokeAPI from "../../Utils/ApiCall/InvokeAPI";
import currencyToSymbolMap from 'currency-symbol-map/map'
import { staticData } from "./Data";
import "./Home.scss";
const options = ['Option 1', 'Option 2'];
const Home = () => {
  const {
    crypto,
    cryptoDetails,
    exchanges,
    exchangeDetails,
    chartData,
    error,
    getCoinList,
    getCoinDetails,
    getExchangeDetails,
    getExchangeList,
    getMarketChert, inputValue, setInputValue, value, setValue,
  } = useGlobalRestApiContext();

  const [currency, setCurrency] = useState("USD");
  const [exchangesData, setExchangesData] = useState(null);
  const [newLoading, setNewLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [openCurrency, setOpenCurrency] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState(null);
  const [exchangeError, setexchangeError] = useState(null);
  const [coinError, setCoinError] = useState(null);

  const newCurrency = currencies.forEach(element => {
    element['label'] = element.name

  });

  // const newItem = Object.entries(currencyToSymbolMap).find(item => item['0'] === value.code)
  // console.log(newItem);


  useEffect(() => {
    getExchangeList()
    getCoinList()
    console.log(currencyToSymbolMap);

  }, [value?.code]);



  const Crypto = () => {
    return (
      <div className="table-responsive text-start table-currency">
        <h3>Top 10 Cryptocurrency</h3>
        <table className="table table-hover table-borderless align-middle">
          <thead className="table-light">
            <tr>
              <th># Coin</th>
              <th>Price</th>
              <th>24 hr Change</th>
              <th>24h Volume</th>
              <th>Market cap</th>
              <th>Last 7 days</th>
              <th>Last 7</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {crypto?.map((item) => {
              return (
                <tr className="" key={item.id}>
                  <td>
                    <Link
                      to={`/coins/${item.id}`}
                      className=" d-flex nav-link justify-content-start align-items-center"
                    >
                      {item.market_cap_rank}
                      <img
                        className="m-2"
                        height={30}
                        src={item.image}
                        alt={item.name}
                      />{" "}
                      <span className=" h5">{item.name}</span>{" "}
                    </Link>
                  </td>
                  <td>
                  {Object.entries(currencyToSymbolMap).find(item => item['0'] === value.code)[1]} {item.current_price}
                  </td>
                  <td>
                    {item.price_change_percentage_24h < 0 ? (
                      <div className=" text-danger">
                        <FaArrowDown></FaArrowDown>
                        <span>
                          {item.price_change_percentage_24h.toFixed(2)} %
                        </span>
                      </div>
                    ) : (
                      <div className=" text-success">
                        <FaArrowUp></FaArrowUp>
                        <span>
                          {item.price_change_percentage_24h.toFixed(2)} %
                        </span>
                      </div>
                    )}
                  </td>
                  <td>
                    {Object.entries(currencyToSymbolMap).find(item => item['0'] === value.code)[1]} {item.total_volume}
                  </td>
                  <td>
                  {Object.entries(currencyToSymbolMap).find(item => item['0'] === value.code)[1]} {item.market_cap}
                  </td>
                  <td>
                    {item.market_cap_change_percentage_24h < 0 ? (
                      <div className=" text-danger">
                        <FaArrowDown></FaArrowDown>
                        <span>
                          {item.market_cap_change_percentage_24h.toFixed(2)} %
                        </span>
                      </div>
                    ) : (
                      <div className=" text-success">
                        <FaArrowUp></FaArrowUp>
                        <span>
                          {item.market_cap_change_percentage_24h.toFixed(2)} %
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="crypto-chirt">
                    <MYChart myData={item.sparkline_in_7d.price}></MYChart>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
        {crypto ? <></> : (
          <div className="text-center p-5 h5">{`No Data Found Please Try Again Later`}</div>
        )}
      </div>
    );
  };
  const Exchanges = () => {
    return (
      <div className="table-responsive text-start table-exchange">
        <h2>Top 10 Exchanges</h2>
        <table className="table table-hover table-borderless align-middle">
          <thead className="table-light">
            <tr>
              <th># Exchanges</th>
              <th>Country</th>
              <th>Trust Score</th>
              <th>Trade Incentive</th>
              <th>Trade Volume(24h)</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <Fragment>
              {exchanges?.map((item) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <Link
                        to={`/exchanges/${item.id}`}
                        className=" d-flex nav-link justify-content-start align-items-center"
                      >
                        {item.trust_score_rank}
                        <img
                          className="m-2"
                          height={30}
                          src={item.image}
                          alt={item.name}
                        />{" "}
                        <span className=" h5">{item.name}</span>{" "}
                      </Link>
                    </td>
                    <td>{item.country}</td>
                    <td>
                      {item.trust_score < 8 ? (
                        <div className=" text-danger">
                          <FaArrowDown></FaArrowDown>
                          <span>{item.trust_score}</span>
                        </div>
                      ) : (
                        <div className=" text-success">
                          <FaArrowUp></FaArrowUp>
                          <span>{item.trust_score}</span>
                        </div>
                      )}
                    </td>
                    <td>{item.has_trading_incentive ? "True" : "False"}</td>

                    <td>
                      {item.trade_volume_24h_btc_normalized < 0 ? (
                        <div className=" text-danger">
                          <FaArrowDown></FaArrowDown>
                          <span>
                            {item.trade_volume_24h_btc_normalized.toFixed(
                              2
                            )}
                          </span>
                        </div>
                      ) : (
                        <div className=" text-success">
                          <FaArrowUp></FaArrowUp>
                          <span>
                            {item.trade_volume_24h_btc_normalized.toFixed(
                              2
                            )}
                          </span>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </Fragment>
          </tbody>
          <tfoot></tfoot>
        </table>
        {exchanges ? <></> : (
          <div className="text-center p-5 h5">{`No Data Found Please Try Again Later`}</div>
        )}
      </div>
    );
  };


  return (
    <div className="container-fluid">
      <div className="row custom-skiliton">
        <Sidebar></Sidebar>

        <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2"></div>
              {/* <div className="dropdown ">
                <button
                  className={`btn btn-light dropdown-toggle ${openCurrency ? "show" : ""
                    }`}
                  type="button"
                  onClick={() => setOpenCurrency(!openCurrency)}
                  aria-expanded={openCurrency ? "true" : "false"}
                >
                  {currency}
                </button>
                <ul
                  className={`dropdown-menu dropdown-menu-right ${openCurrency ? "show" : ""
                    }`}
                  style={
                    openCurrency
                      ? {
                        position: "absolute",
                        inset: `0px auto auto 0px`,
                        margin: `0`,
                        transform: ` translate(0px, 40px)`,
                        minWidth: 75,
                      }
                      : {}
                  }
                >
                  {staticData.newCurr.map((item) => {
                    return (
                      <li
                        key={item.id}
                        role="button"
                        onClick={chengeCurrency}
                        className="dropdown-item"
                      >
                        {item.currency_code}
                      </li>
                    );
                  })}
                </ul>
              </div> */}
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={currencies}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Currencies" />}
              />
            </div>
          </div>

          <Crypto></Crypto>
          {<Exchanges></Exchanges>}
        </div>
      </div>
    </div>
  );
};

export default Home;
