import React, { useEffect, useState } from "react";
import { FaGoogle, FaReact, FaGithub } from "react-icons/fa";
import { Circles } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalAuth } from "../../Context/Auth/globalAuthContext";
import AuthInvokeAPI from "../../Utils/ApiCall/AuthInvoke";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const nagivate = useNavigate()

  
  const {updateUser,user,loginHandler} = useGlobalAuth()
const LoginClick = (params) => {
 try {
  loginHandler()
  nagivate('/')
 } catch (error) {
 
  nagivate('/')
 }
  
}



 

  return (
    <div className=" col-4 m-auto">
      <main className="form-signin card rounded-5 shadow p-5 pb-3 mt-5">
        <div className="">
          <Circles color="" width={""}></Circles>

          <h1 className="h3 m-3 fw-normal">Please sign in</h1>

          <div className="form-floating  mb-3 mt-3">
            <input
              type="email"
              className="form-control"
              onChange={(e) => setUserName(e.target.value)}
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating  mb-3 mt-3">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input
                type="checkbox"
                value="remember-me"
                onChange={(e) => setRemember(!remember)}
              />{" "}
              Remember me
            </label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary m-2"
            onClick={loginHandler}
            type="submit">
            Sign in
          </button>
          <div className=" d-flex align-items-center justify-content-between">
            {" "}
            <button
              className="col-6 btn btn-lg btn-warning m-2"
              onClick={loginHandler}
              type="submit">
              <FaGoogle></FaGoogle> Google
            </button>
            <button
              className="col-6 btn btn-lg btn-dark m-2"
              onClick={loginHandler}
              type="submit">
              <FaGithub></FaGithub> Github
            </button>
          </div>
          <Link to={`/signup`}>Don't have Account? </Link>
          <p className="mt-5 mb-3 text-muted">
            © 2017 – {new Date().getFullYear()}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
