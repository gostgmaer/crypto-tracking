import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import MYChart from "../../Components/Charts/Charts";
import Table from "../../Components/Table/Table";
import useFetch from "../../Context/UseFetch/Usefetch";
import InvokeAPI from "../../Utils/ApiCall/InvokeAPI";
import "./Home.scss";
const Home = () => {
  const [currency, setCurrency] = useState("USD");
  const [exchanges, setExchanges] = useState();
  const [newLoading, setNewLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [openCurrency, setOpenCurrency] = useState(true);
  const [loading, setLoading] = useState(true);
  const [Data, setData] = useState();
  // const { Data, loading, error } = useFetch("coins/markets", "get", "", "", {
  // vs_currency: currency,
  // order: "market_cap_desc",
  // per_page: 10,
  // page: 1,
  // sparkline: true,
  // });
  const api = async () => {
    const res = await InvokeAPI("exchanges", "get", "", "", {
      per_page: 10,
      page: count,
    });
    console.log(res);
    setExchanges(res);
    setNewLoading(false);
  };

  const Dataapi = async () => {
    const res = await InvokeAPI("coins/markets", "get", "", "", {
      vs_currency: currency,
      order: "market_cap_desc",
      per_page: 10,
      page: 1,
      sparkline: true,
    });
    console.log(res);
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    api();
  }, [count]);

  useEffect(() => {
    Dataapi();
  }, [currency]);

  const sidebarNavData = [
    "dashboard",
    "orders",
    "products",
    "customers",
    "reports",
    "integrations",
  ];
  const sidebarReportsData = [
    "Current month",
    "Last quarter",
    " Social engagement",
    " Year-end sale",
    "reports",
    "integrations",
  ];
  const newCurr = [
    {
      id: 1,
      curency: "Ripye",
      currency_code: "INR",
    },
    {
      id: 2,
      curency: "Ruble",
      currency_code: "RUB",
    },
    {
      id: 3,
      curency: "US Doller",
      currency_code: "USD",
    },
    {
      id: 4,
      curency: "Yen",
      currency_code: "JPY",
    },
    {
      id: 5,
      curency: "Euro",
      currency_code: "EUR",
    },
  ];
  const chengeCurrency = (e) => {
    setCurrency(e.target.innerText);
    setOpenCurrency(!openCurrency);
    console.log(currency);
  };
  const selectCurrencyData = () => {
    setOpenCurrency(!openCurrency);
  };
  const CloseCurrencyData = () => {
    setOpenCurrency(!openCurrency);
  };
  const Crypto = () => {
    return (
      <div className="table-responsive">
        <table
          className="table table-striped
    table-hover	
    table-borderless
   
    align-middle"
        >
          <thead className="table-light">
            <caption>Top 10 Cryptocurrency</caption>
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
            {Data?.map((item) => {
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
      </div>
    );
  };
  const Exchanges = () => {
    return (
      <div className="table-responsive">
        <table
          className="table table-striped
    table-hover	
    table-borderless
    table-primary
    align-middle"
        >
          <thead className="table-light">
            <caption>Top 10 Exchanges</caption>
            <tr>
              <th># Exchanges</th>
              <th>Country</th>
              <th>Trust Score</th>
              <th>24h Volume</th>
              <th>Market cap</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {newLoading
              ? ""
              : exchanges.length > 0 &&
                exchanges.map((item) => {
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
                              {item.trade_volume_24h_btc_normalized.toFixed(2)}
                            </span>
                          </div>
                        ) : (
                          <div className=" text-success">
                            <FaArrowUp></FaArrowUp>
                            <span>
                              {item.trade_volume_24h_btc_normalized.toFixed(2)}
                            </span>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    );
  };
  const Sidebarnav = () => {
    return (
      <React.Fragment>
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-dark sidebar"
        >
          <div className=" sticky-top pt-5 text-start">
            <ul className="nav flex-column text-start">
              {sidebarNavData.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <NavLink className=" nav-link text-light " to={item}>
                      {item.toLocaleUpperCase()}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
            </h6>
            <ul className="nav flex-column mb-2">
              {sidebarReportsData.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link text-light" to={item}>
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebarnav></Sidebarnav>

        <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2"></div>
              <div class="dropdown">
                <button
                  class={`btn btn-light dropdown-toggle ${openCurrency?'show':''}`}
                  type="button" onClick={selectCurrencyData}
                  aria-expanded={openCurrency?'true':'false'}
                >
                  Select Currency
                </button>
                <ul
                  class={`dropdown-menu ${openCurrency?'show':''}`}
                  style={openCurrency? { position: "absolute", inset: `0px auto auto 0px`, margin:`0`,transform:` translate(0px, 40px)` }: { }}
                 
                >
                  {newCurr.map((item) => {
                        return (
                          <li
                            key={item.id}
                            onClick={chengeCurrency}
                            className="dropdown-item"
                          >
                            {item.currency_code}
                          </li>
                        );
                      })}
                </ul>
              </div>
             
              {/* <React.Fragment>
              <button
                type="button"
                className="btn btn-sm btn-secondary dropdown-toggle"
                onClick={selectCurrencyData}
              >
                Select Currency
              </button>
                <div
                  id="exampleModalLive"
                  className={`modal fade ${openCurrency ? "show" : ""}`}
                  style={
                    openCurrency
                      ? { display: "block", paddingRight: 17 }
                      : { display: "none" }
                  }
                >
                  <div className="ModalClassModal">
                    <div className=" justify-content-center align-items-center p-5 bg-warning rounded-5 d-flex">
                      <button
                        type="button"
                        onClick={CloseCurrencyData}
                        className="btn btn-danger"
                      >
                        <MdClose></MdClose>
                      </button>

                      {newCurr.map((item) => {
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={chengeCurrency}
                            className="btn btn-light m-1"
                          >
                            {item.currency_code}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </React.Fragment> */}
            </div>
          </div>

          {/* <canvas
            className="my-4 w-100"
            id="myChart"
            width="900"
            height="320"
          ></canvas> */}
          <Crypto></Crypto>
          {<Exchanges></Exchanges>}
        </div>
      </div>
    </div>
  );
};

export default Home;
