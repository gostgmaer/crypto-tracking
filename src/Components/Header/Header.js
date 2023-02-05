import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../Assets/StaticData/Data";
import "./header.scss";
import { MdLogin, MdLogout } from "react-icons/md";
import { FaLockOpen, FaUser, FaUserAlt, FaUserEdit } from "react-icons/fa";
const Header = () => {
  const headerNavData = [
    {
      id: 1,
      text: "Home",
      url: "/dashboard",
    },
    {
      id: 2,
      text: "Exchanges",
      url: "exchanges",
    },
    {
      id: 3,
      text: "Coins",
      url: "coins",
    },
    {
      id: 4,
      text: "Featured Item",
      url: "Featured",
    }
   
  ];
  const headerOthers = [
    {
      id: 1,
      text: "about",
      url: "about",
    },
    {
      id: 2,
      text: "Contact",
      url: "contact",
    },
    {
      id: 3,
      text: "Report",
      url: "report",
    },
  ];
  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm  bg-dark">
        <div className="container  text-light">
          <a className="navbar-brand  text-light" href="/">
            {logo.toLocaleUpperCase()}{" "}
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0 align-items-center">
              {headerNavData.map((item) => {
                return (
                  <li className="nav-item" key={item.id}>
                    <NavLink className="nav-link text-light"  to={item.url}>
                      {item.text}{" "}
                    </NavLink>
                  </li>
                );
              })}

              <li className="nav-item dropdown">
                <span className="nav-link  text-light dropdown-toggle">Others</span>
                <div className="dropdown-menu">
                  {headerOthers.map((item) => {
                    return (
                      <NavLink
                        key={item.id}
                        className="dropdown-item"
                        to={item.url}
                      >
                        {item.text}
                      </NavLink>
                    );
                  })}
                </div>
              </li>
            </ul>
            <div className="d-flex  text-light  align-items-center my-lg-0">
            
            
              <Link className="btn m-1 d-flex  btn-light align-items-center" to={`/login`}>
                <MdLogin></MdLogin> Login
              </Link>
              <button className="btn m-1 d-flex  btn-light align-items-center">
               <MdLogout></MdLogout> Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
