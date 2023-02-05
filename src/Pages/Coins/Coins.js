import React, { Fragment, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Bars } from "react-loader-spinner";
import Card from "../../Components/DataCard/Card";
import Sidebar from "../../Components/Sidebar/Sidebar";
import useFetch from "../../Context/UseFetch/Usefetch";

const Coins = () => {
  const [count, setCount] = useState(1);

  const { Data, loading, error } = useFetch("coins/markets", "get", "", "", {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 100,
    page: count,
    sparkline: false,
  });

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <Sidebar></Sidebar>
          <div className="col-md-9 col-lg-10 d-flex flex-wrap ml-sm-auto ">
            {Data?(
              <Fragment>
                {Data?.map((item) => {
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
              </Fragment>
            ): (
              <div className=" d-flex justify-content-center h3 align-items-center w-100 ">{error}</div>
            )  }
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Coins;
