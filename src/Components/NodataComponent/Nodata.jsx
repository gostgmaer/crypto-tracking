import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalRestApiContext } from '../../Context/AppContext/GlobalApiCallContext';

const Nodata = ({title}) => {
    const {

    error,
   
  } = useGlobalRestApiContext();

  return (
    <div className="card text-center">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <h5 className="card-title">{error}</h5>
          <p className="card-text">
           Please wait some time and Try again Later for More Information
          </p>
          <Link className="btn btn-primary btn-sm " to="/">
            Home
          </Link>
        </div>
      </div>
  )
}

export default Nodata