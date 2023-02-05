import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/HomePage/Home";

import Exchanges from "../../Pages/Exchange/Exchanges";
import Coins from "../../Pages/Coins/Coins";
import CoinDetails from "../../Pages/Coins/CoinDetails";
import ExchangeDetails from "../../Pages/Exchange/ExchangeDetails";
import Profile from "../../Pages/Profile/Profile";
import Login from "../../Pages/Profile/Login";
import Registration from "../../Pages/Profile/Registration";
import Wallet from "../../Pages/Profile/Wallet";
import About from "../../Pages/Others/About";
import Contact from "../../Pages/Others/Contact";
import Featured from "../../Pages/Others/Featured";
import Notfound from "../../Pages/NotFound/Notfound";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import { useGlobalAppContext } from "../../Context/AppContext/GlobalContext";
import Header from "../../Components/Header/Header";

const Router = () => {
  const { loader } = useGlobalAppContext();
  return (
    <Fragment>
      {loader && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#fff"
          ariaLabel="three-dots-loading"
          wrapperStyle={{display: "flex",background:'#000000d4', width: "100%",height: "100%",zIndex: 999,position: "absolute",alignItems: "center",justifyContent: "center"}}
          wrapperClassName="customCssLoader"
          visible={true}
        />
      )}
      <Header></Header>
      <Routes>
        {/* <Route path='/' element={<Home></Home>} ></Route> */}
        <Route path="/dashboard" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/coins/:id" element={<CoinDetails></CoinDetails>}></Route>
        <Route path="/exchanges" element={<Exchanges></Exchanges>}></Route>
        <Route
          path="/exchanges/:id"
          element={<ExchangeDetails></ExchangeDetails>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Registration></Registration>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/wallet" element={<Wallet></Wallet>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/featured" element={<Featured></Featured>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </Fragment>
  );
};

export default Router;
