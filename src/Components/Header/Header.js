import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { logo } from '../../Assets/StaticData/Data'
import './header.scss'



import { FaUser, FaUserAlt, FaUserEdit } from "react-icons/fa";
const Header = () => {


    
  return (
    <div className='header'> 
   
      
        
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="/">{logo.toLocaleUpperCase()} </a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0 align-items-center">
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/">Home </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="exchanges">Exchanges </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="coins">Coins </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="featured">Featured </NavLink>
                    </li>
                   
                    <li class="nav-item dropdown">
                        <span class="nav-link dropdown-toggle" >Others</span>
                        <div class="dropdown-menu">
                            <NavLink class="dropdown-item" to="about">About us</NavLink>
                            <NavLink class="dropdown-item" to="contact">Contact</NavLink>
                        </div>
                    </li>
                </ul>
                <div class="d-flex  align-items-center my-lg-0">
                    <Link className='btn m-1 d-flex align-items-center' to={`login`} ><FaUser/> Login</Link>
                    <Link className='btn btn-warning d-flex align-items-center' to={`signup`} > <FaUserAlt></FaUserAlt> Sign up</Link>
                    
                </div>
            </div>
        </div>
      </nav>
      
      

    
     </div>
  )
}

export default Header