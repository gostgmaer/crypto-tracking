import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { staticData } from '../../Assets/StaticData/StaticData';

const Sidebar = () => {
    return (
        <React.Fragment>
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-dark sidebar">
            <div className=" sticky-top pt-5 text-start">
              <ul className="nav flex-column text-start">
                {staticData.sidebarNavData.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <NavLink className=" nav-link text-light " to={item.url}>
                        {item.text}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
  
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
              </h6>
              <ul className="nav flex-column mb-2">
                {staticData.sidebarReportsData.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <Link className="nav-link text-light" to={item.url}>
                        {item.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </React.Fragment>
      );
}

export default Sidebar