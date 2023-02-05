import React, { Fragment, useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Bars } from "react-loader-spinner";
import Card from "../../Components/DataCard/Card";
import Sidebar from "../../Components/Sidebar/Sidebar";
import useFetch from "../../Context/UseFetch/Usefetch";
import InvokeAPI from "../../Utils/ApiCall/InvokeAPI";

const Exchanges = () => {
  const { Data, loading, error } = useFetch("exchanges", "get", "", "", "");

  const [exchanges, setExchanges] = useState();
  const [count, setCount] = useState(1);

  // useEffect(() => {
  //   res();
  // }, []);
  // const res = async () => {
  //   const data = await InvokeAPI("exchanges", "get", "", "", "");
  //   setLoading(true)
  //   setExchanges(data);
  //   setLoading(false)

  // };

  // useFetch()

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <Sidebar></Sidebar>
          <div className="col-md-9 col-lg-10 d-flex flex-wrap ml-sm-auto">
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
      </div>
        </div>
      </div>

     
    </Fragment>
  );
};

export default Exchanges;
