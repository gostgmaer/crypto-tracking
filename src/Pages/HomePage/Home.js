import { Autocomplete, TextField } from "@mui/material";
import { currencies } from "currencies.json";
import React, { Fragment, useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import MYChart from "../../Components/Charts/Charts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useGlobalRestApiContext } from "../../Context/AppContext/GlobalApiCallContext";

import useFetch from "../../Context/UseFetch/Usefetch";
import InvokeAPI from "../../Utils/ApiCall/InvokeAPI";
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
    getMarketChert,inputValue, setInputValue,  value, setValue,
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

  useEffect(() => {
    console.log(value, inputValue);

  }, [value]);
  // const { Data, loading, error } = useFetch("coins/markets", "get", "", "", {
  // vs_currency: currency,
  // order: "market_cap_desc",
  // per_page: 10,
  // page: 1,
  // sparkline: true,
  // });

  // const getExchangeData = async () => {
  //   setLoading(true);
  //   setexchangeError(null);
  //   const param = {
  //     per_page: 10,
  //     page: count,
  //     vs_currency: currency,
  //   };
  //   try {
  //     const res = await InvokeAPI("exchanges", "get", "", "", param);
  //     setExchangesData(res);
  //   } catch (error) {
  //     setexchangeError(error.message);
  //     setExchangesData(null);
  //   }
  //   setNewLoading(false);
  // };

  // const getCoinData = async () => {
  //   setLoading(true);
  //   setCoinError(null);
  //   const params = {
  //     vs_currency: currency,
  //     order: "market_cap_desc",
  //     per_page: 10,
  //     page: 1,
  //     sparkline: true,
  //   };
  //   try {
  //     const res = await InvokeAPI("coins/markets", "get", "", "", params);
  //     setData(res);
  //   } catch (error) {
  //     setCoinError(error.message);
  //     setData(null);
  //   }
  //   setLoading(false);
  // };

  useEffect(() => {
    getExchangeList()
    getCoinList({ currency: value?.code })
  }, [value?.code]);
  // useEffect(() => {
  //   getExchangeData();
  //   getCoinData();
  // }, [currency]);

  const chengeCurrency = (e) => {
    setCurrency(e.target.innerText);
    setOpenCurrency(!openCurrency);
    console.log(currencies);
  };

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
                    {currency}-{item.current_price}
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
                    {currency}-{item.total_volume}
                  </td>
                  <td>
                    {currency}-{item.market_cap}
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
              <th>24h Volume</th>
              <th>Market cap</th>
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
  // const Sidebarnav = () => {
  //   return (
  //     <React.Fragment>
  //       <nav
  //         id="sidebarMenu"
  //         className="col-md-3 col-lg-2 d-md-block bg-dark sidebar">
  //         <div className=" sticky-top pt-5 text-start">
  //           <ul className="nav flex-column text-start">
  //             {staticData.sidebarNavData.map((item, index) => {
  //               return (
  //                 <li className="nav-item" key={index}>
  //                   <NavLink className=" nav-link text-light " to={item.url}>
  //                     {item.text}
  //                   </NavLink>
  //                 </li>
  //               );
  //             })}
  //           </ul>

  //           <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
  //             <span>Saved reports</span>
  //           </h6>
  //           <ul className="nav flex-column mb-2">
  //             {staticData.sidebarReportsData.map((item, index) => {
  //               return (
  //                 <li className="nav-item" key={index}>
  //                   <Link className="nav-link text-light" to={item.url}>
  //                     {item.text}
  //                   </Link>
  //                 </li>
  //               );
  //             })}
  //           </ul>
  //         </div>
  //       </nav>
  //     </React.Fragment>
  //   );
  // };

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
                renderInput={(params) => <TextField {...params} label="Controllable" />}
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
