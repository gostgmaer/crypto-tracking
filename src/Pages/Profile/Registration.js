import React from "react";
import {
  FaBuilding,
  FaLock,
  FaMailBulk,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.scss";
const Registration = () => {
  return (
    <div className="registration">
      <div className="container">
        <br />{" "}
        <p className="text-center">
          More bootstrap 4 components on{" "}
          <a href="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com</a>
        </p>
        <hr />
        <div className="card bg-light">
          <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
            <h4 className="card-title mt-3 text-center">Create Account</h4>
            <p className="text-center">Get started with your free account</p>
            <p>
              <a href="" className="btn btn-block btn-twitter">
                {" "}
                <i className="fab fa-twitter"></i>   Login via Twitter
              </a>
              <a href="" className="btn btn-block btn-facebook">
                {" "}
                <i className="fab fa-facebook-f"></i>   Login via facebook
              </a>
            </p>
            <p className="divider-text">
              <span className="bg-light">OR</span>
            </p>
            <form>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="btn bg-light input-group-text">
                    {" "}
                    <FaUser></FaUser>{" "}
                  </span>
                </div>
                <input
                  name=""
                  className="form-control"
                  placeholder="Full name"
                  type="text"
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="btn bg-light input-group-text">
                    <FaMailBulk></FaMailBulk>{" "}
                  </span>
                </div>
                <input
                  name=""
                  className="form-control"
                  placeholder="Email address"
                  type="email"
                />
              </div>
              {/* <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                   
                    <FaPhone></FaPhone>{" "}
                  </span>
                </div>
                <select className="custom-select" style={{ maxWidth: 120 }}>
                  <option selected="">+971</option>
                  <option value="1">+972</option>
                  <option value="2">+198</option>
                  <option value="3">+701</option>
                </select>
                <input
                  name=""
                  className="form-control"
                  placeholder="Phone number"
                  type="text"
                />
              </div> */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text btn bg-light">
                   
                    <FaBuilding></FaBuilding>{" "}
                  </span>
                </div>
                <select className="form-control">
                  <option selected=""> Select job type</option>
                  <option>Designer</option>
                  <option>Manager</option>
                  <option>Accaunting</option>
                </select>
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text btn bg-light">
                    {" "}
                    <FaLock></FaLock>{" "}
                  </span>
                </div>
                <input
                  className="form-control"
                  placeholder="Create password"
                  type="password"
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text btn bg-light">
                    {" "}
                    <FaLock></FaLock>{" "}
                  </span>
                </div>
                <input
                  className="form-control"
                  placeholder="Repeat password"
                  type="password"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  {" "}
                  Create Account{" "}
                </button>
              </div>
              <p className="text-center">
                Have an account? <a href="">Log In</a>{" "}
              </p>
            </form>
          </article>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Registration;
