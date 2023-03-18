import React, { useContext, useState, useEffect } from "react";
import InvokeExternalAPI, { cleanQueryparam } from "../../Utils/axiosSetup";

const AppRestApiContext = React.createContext(null);

const AppRestApiProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [exchanges, setExchanges] = useState(null);
  const [crypto, setCrypto] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [exchangeDetails, setExchangeDetails] = useState(null);
  const [cryptoDetails, setCryptoDetails] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);
  const [value, setValue] = React.useState({
    "name": "US Dollar",
    "symbol": "$",
    "symbolNative": "$",
    "decimalDigits": 2,
    "rounding": 0,
    "code": "USD",
    "namePlural": "US dollars",
    "label": "US Dollar"
  });
  const [inputValue, setInputValue] = React.useState('US Dollar');

  const updateLoader = () => {
    setLoading(!loading)
  }
  const getExchangeList = async (query) => {
    setLoading(true);
    setError(null);
    const param = {
      per_page: query?.perPage ? query.perPage : 10,
      page: query?.pageCount ? query.pageCount : 1,
    };
    try {
      const res = await InvokeExternalAPI("exchanges", "get", "", {}, param);
      setExchanges(res);
    } catch (error) {
      setError(error.message);
      setExchanges(null);
    }
    setLoading(false);
  };

  const getExchangeDetails = async (query, id) => {
    setLoading(true);
    setError(null);
    const param = {
      tickers: true,
      market_data: true,
      community_data: true,
      developer_data: true,
      sparkline: true,
    };
    try {
      const res = await InvokeExternalAPI(`exchanges/${id}`, "get", "", {}, param);
      setExchangeDetails(res);
    } catch (error) {
      setError(error.message);
      setExchangeDetails(null);
    }
    setLoading(false);
  };

  const getCoinList = async (query) => {
    console.log(query);
    setLoading(true);
    setError(null);
    const param = {
      per_page: query?.perPage ? query.perPage : 10,
      vs_currency: value?.code?value.code:'USD',
      order: query?.order ? query.order : 'market_cap_desc',
      category: query?.category ? query.category : null,
      sparkline:query?.sparkline ? query.sparkline : true,
      ids: query?.ids ? query.ids : null,
      page: query?.pageCount ? query.pageCount : 1,
      price_change_percentage: query?.time ? query.time : '14d'
    };
    try {
      const res = await InvokeExternalAPI("coins/markets", "get", "", {}, param);
      setCrypto(res);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
      setCrypto(null);
    }
    setLoading(false);
  };

  const getCoinDetails = async (query, id) => {
    setLoading(true);
    setError(null);
    const param = {
      tickers: true,
      market_data: true,
      community_data: true,
      developer_data: true,
      sparkline: true,
    };
    try {
      const res = await InvokeExternalAPI(`coins/${id}`, "get", "", {}, param);
      setCryptoDetails(res);
    } catch (error) {
      setError(error.message);
      setCryptoDetails(null);
    }
    setLoading(false);
  };

  // useEffect(() => {
  //   getExchangeList({})

  // }, []);


  const getMarketChert = async (query, id, type) => {
    setLoading(true);
    setError(null);
    const param = {

      vs_currency: query?.currency ? query.currency : 'usd',
      interval: query?.interval ? query.interval : null,
      days: query?.time ? query.time : '14d'
    };
    cleanQueryparam(param)
    try {
      const res = await InvokeExternalAPI(`${type}/${id}/market_chart`, "get", "", {}, param);
      setChartData(res);
    } catch (error) {
      setError(error.message);
      setChartData(null);
    }
    setLoading(false);
  };

  // useEffect(() => {
  //   getExchangeList({})

  // }, []);


  return <AppRestApiContext.Provider value={{
  inputValue, setInputValue,  value, setValue,loading, crypto, cryptoDetails, exchanges, exchangeDetails, chartData, currency, error, getCoinList, getCoinDetails, getExchangeDetails, getExchangeList, getMarketChert
  }}>{children}</AppRestApiContext.Provider>;
};

export const useGlobalRestApiContext = () => {
  return useContext(AppRestApiContext);
};

export { AppRestApiContext, AppRestApiProvider };
