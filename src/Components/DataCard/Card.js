import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({image,name,id,url,rank}) => {
  return (
    <div  class="col-3 p-0 ">
    <div class="card m-2  shadow pe-auto">
      <div class="card-body text-center m-auto">
        <img
          src={image}
          className="m-auto  rounded-circle"
          alt={name}
        ></img>
        <h4 class="card-title">{name}</h4>
       
        <div class="card-body d-flex justify-content-between align-items-center">
          <Link to={id} class="btn btn-warning">
            Get Details
          </Link>
          <a
            href={url}
            target={`_blank`}
            class=" btn btn-light "
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