import { useTabPanel } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../Context/UseFetch/Usefetch';

const ExchangeDetails = () => {


  const id = useParams().id;








  const { Data, loading, error } = useFetch(`exchanges/${id}`, "get", "", "", {
    tickers: true,
    market_data: true,
    community_data: true,
    developer_data: true,
    sparkline: true,
  });
  return (
    <div>ExchangeDetails</div>
  )
}

export default ExchangeDetails