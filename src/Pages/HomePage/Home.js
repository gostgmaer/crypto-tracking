import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
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

  const { Data, loading, error } = useFetch("coins/markets", "get", "", "", {
    vs_currency: currency,
    order: "market_cap_desc",
    per_page: 10,
    page: 1,
    sparkline: true,
  });
  const api = async ()=>{

    const res = await InvokeAPI('exchanges','get','','',{ per_page: 10,
      page: count,})
      console.log(res);
      setExchanges(res)
      setNewLoading(false)
  }

  
  useEffect(()=>{
   api()
   
   
  },[count])


  const Crypto =()=>{


    return  <div class="table-responsive">
    <table
      class="table table-striped
    table-hover	
    table-borderless
    table-primary
    align-middle"
    >
      <thead class="table-light">
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
      <tbody class="table-group-divider">
        {Data?.map((item) => {
          return (
            <tr class="" key={item.id}>
              <td>
                <Link to={`/coins/${item.id}`} className=" d-flex nav-link justify-content-start align-items-center">
                  {item.market_cap_rank}
                  <img className="m-2"
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
                    <span>{item.price_change_percentage_24h}</span>
                  </div>
                ) : (
                  <div className=" text-success">
                    <FaArrowUp></FaArrowUp>
                    <span>{item.price_change_percentage_24h}</span>
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
                      {item.market_cap_change_percentage_24h}
                    </span>
                  </div>
                ) : (
                  <div className=" text-success">
                    <FaArrowUp></FaArrowUp>
                    <span>
                      {item.market_cap_change_percentage_24h}
                    </span>
                  </div>
                )}
              </td>
              <td className="crypto-chirt">
               <MYChart myData={item.sparkline_in_7d.price} ></MYChart>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
  }
  const Exchanges =()=>{
  


    return  <div class="table-responsive">
    <table
      class="table table-striped
    table-hover	
    table-borderless
    table-primary
    align-middle"
    >
      <thead class="table-light">
        <caption>Top 10 Exchanges</caption>
        <tr>
          <th># Exchanges</th>
          <th>Country</th>
          <th>Trust Score</th>
          <th>24h Volume</th>
          <th>Market cap</th>
         
        </tr>
      </thead>
      <tbody class="table-group-divider">
        {newLoading?'':  exchanges.length>0 && exchanges.map((item) => {
          return (
            <tr class="" key={item.id}>
              <td>
                <Link to={`/exchanges/${item.id}`} className=" d-flex nav-link justify-content-start align-items-center">
                  {item.trust_score_rank}
                  <img className="m-2"
                    height={30}
                    src={item.image}
                    alt={item.name}
                  />{" "}
                  <span className=" h5">{item.name}</span>{" "}
                </Link>
              </td>
              <td>
                {item.country}
              </td>
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
              <td>
                {item.has_trading_incentive?'True':'False'}
              </td>
              
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
  }

  return (
    <div className=" container-fluid ">
      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar d-sticky collapse"
          >
            <div class="position-sticky pt-3 text-start">
              <ul class="nav flex-column text-start">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <span data-feather="home"></span>
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file"></span>
                    Orders
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="users"></span>
                    Customers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    Reports
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="layers"></span>
                    Integrations
                  </a>
                </li>
              </ul>

              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a
                  class="link-secondary"
                  href="#"
                  aria-label="Add a new report"
                >
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="">
                    <span data-feather="file-text"></span>
                    Current month
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Last quarter
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Social engagement
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>

            <canvas
              class="my-4 w-100"
              id="myChart"
              width="900"
              height="380"
            ></canvas>
    <Crypto></Crypto>
   {newLoading?'':<Exchanges></Exchanges>}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
