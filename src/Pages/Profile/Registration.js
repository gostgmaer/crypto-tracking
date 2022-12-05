import React, { useState } from "react";
import {
  FaBuilding,
  FaCalendar,
  FaEye,
  FaGithub,
  FaGlobe,
  FaGoogle,
  FaLock,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { MdGroup, MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { staticCountry } from "../../Assets/StaticData/StaticCountry";
import "./styles.scss";

const Registration = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [iscorrect, setIscorrect] = useState(false);
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("No data Provided");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [isaccept, setIsaccept] = useState(false);
  const [viewPass, setViewPass] = useState(false);
  const [phone, setPhone] = useState("");

  const body = {
    fname: fname,
    lname: lname,
    email: email,
    username: username,
    country: country,
    iscorrect: iscorrect,
    isaccept: isaccept,
    pass: pass,
    gender: gender,
    dateOfBirth: dob,
    phone: phone,
  };

  const handleViewpass = () => {
    setViewPass(!viewPass);
  };

  const handleCreateAccount = () => {
    console.log(body);
  };

  const FromData = () => {
   
  };

  return (
    <div className="registration">
      <div className="container">
        <div className="card bg-light mt-5">
          <article className="card-body mx-auto" style={{ maxWidth: "75%" }}>
            <h4 className="card-title mt-3 text-center">Create Account</h4>
            <p className="text-center">Get started with your free account</p>
            <p>
              <button href="" className="btn btn-warning m-1">
                <FaGoogle></FaGoogle> Login via Google
              </button>
              <button className="btn btn-dark m-1">
                <FaGithub></FaGithub> Login via Github
              </button>
            </p>
            <p className="divider-text">OR</p>
            <div className="registration-from">
        <div className=" registration-from-fields">
          <div className=" d-flex">
            <div className="input-group  m-2">
              <span className="input-group-text">
                <FaUser></FaUser>
              </span>
              <input
                type="text"
                onChange={(e) => setFname(e.target.value)}
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="input-group  m-2">
              <span className="input-group-text">
                <FaUser></FaUser>
              </span>
              <input
                type="text"
                className="form-control pt-1"
                onChange={(e) => setLname(e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className=" d-flex">
            <div className="input-group  m-2">
              <span className="input-group-text">
                <FaUser></FaUser>
              </span>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="input-group  m-2">
              <span className="input-group-text">
                <FaGlobe></FaGlobe>
              </span>

              <select
                className="form-select form-select-lg"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option defaultValue>Select Country</option>
                {staticCountry.map((country) => (
                  <option value={country.name} key={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className=" d-flex">
            <div className="input-group  m-2">
              <span className="input-group-text">
                <MdMail></MdMail>
              </span>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="input-group  m-2">
              <span className="input-group-text">
                <FaPhone></FaPhone>
              </span>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="form-control pt-1"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className=" d-flex">
            <div className="input-group  m-2">
              <span className="input-group-text">
                <MdGroup></MdGroup>
              </span>
              <div className="btn-group" data-bs-toggle="buttons">
                <label className="btn">
                  <input
                    type="radio"
                    className="me-2"
                    onChange={(e) => setGender(e.target.value)}
                    name="gender"
                    autoComplete="off"
                  />{" "}
                  Male
                </label>
                <label className="btn">
                  <input
                    type="radio"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                    autoComplete="off"
                  />{" "}
                  Female
                </label>
              </div>
            </div>
            <div className="input-group  m-2">
              <span className="input-group-text">
                <FaCalendar></FaCalendar>
              </span>
              <input
                type="date"
                onChange={(e) => setDob(e.target.value)}
                className="form-control pt-1"
                placeholder="Date of Birth"
              />
            </div>
          </div>
          <div className=" d-flex">
            <div className="input-group  m-2">
              <span className="input-group-text">
                <FaLock></FaLock>
              </span>
              <input
                type={viewPass ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
              />{" "}
              <span style={{ cursor: "pointer" }} className="input-group-text"  onClick={handleViewpass}>
                <FaEye></FaEye>
              </span>
            </div>
            <div className="input-group  m-2">
              <span className="input-group-text">
                <FaLock></FaLock>
              </span>
              <input
                type={viewPass ? "text" : "password"}
                value={confirmPass}
                className="form-control pt-1"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPass(e.target.value)}
              />{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={handleViewpass}
                className=" input-group-text"
              >
                <FaEye></FaEye>
              </span>
            </div>
          </div>
          <div className="  pt-4 text-start">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkbox"
                onChange={(e) => setIsaccept(e.target.value)}
                value="true"
              />
              <label className="form-check-label" for="">
                By checking, you agree to our Terms, Privacy Policy and Cookies
                Policy. You may receive SMS notifications from us and can opt
                out at any time.
              </label>
            </div>

            <div className="form-check form-check-inline mt-2">
              <input
                className="form-check-input"
                onChange={(e) => setIscorrect(e.target.value)}
                type="checkbox"
                id="checkbox"
                value="true"
              />
              <label className="form-check-label" for="">
                by checking this You agree Your information is currect
              </label>
            </div>
          </div>
        </div>

        <div className="registraion-form-buttons">
          <div className="form-group mt-5">
            <button
              type="button"
              onClick={handleCreateAccount}
              className="btn btn-primary btn-block"
            >
              Create an Account
            </button>
          </div>
          <p className="text-center mt-3">
            Have an account? <Link to={`/`}>Log In</Link>
          </p>
        </div>
      </div>
          </article>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Registration;
