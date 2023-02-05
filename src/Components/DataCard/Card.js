import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({image,name,id,url,rank}) => {
  return (
    <div  className="col-4 p-0 ">
    <div className="card m-2  shadow pe-auto">
      <div className="card-body text-center m-auto">
        <img
          src={image}
          className="m-auto w-50 rounded-circle"
          alt={name}
        ></img>
        <h4 className="card-title">{name}</h4>
       
        <div className="card-body card-button-Container p-0 d-flex justify-content-between align-items-center">
          <Link to={id} className="btn btn-warning">
            Get Details
          </Link>
          <a
            href={url}
            target={`_blank`}
            className=" btn btn-light "
          >
            Official Website
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card