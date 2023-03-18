import { Pagination, Stack, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Bars } from "react-loader-spinner";
import Card from "../../Components/DataCard/Card";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useGlobalRestApiContext } from "../../Context/AppContext/GlobalApiCallContext";
import useFetch from "../../Context/UseFetch/Usefetch";

const Coins = () => {
  const [count, setCount] = useState(1);
  const [page, setPage] = React.useState(1);
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
    getMarketChert,
    inputValue,
    setInputValue,
    value,
    setValue,
  } = useGlobalRestApiContext();


  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getCoinList({ perPage: 90, pageCount: page });
  }, [page]);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row custom-skiliton">
          <Sidebar></Sidebar>
          <div className="col-md-9 col-lg-10 d-flex flex-wrap ml-sm-auto ">
            {crypto?.map((item) => {
              return <Card key={item.id} {...item}></Card>;
            })}

            <div className="container p-5 d-flex justify-content-center align-items-center">
              <Stack spacing={2}>
                <Pagination count={100} page={page} onChange={handleChange} />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Coins;
