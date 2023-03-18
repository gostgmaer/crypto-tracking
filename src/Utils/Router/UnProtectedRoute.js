import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";


import Registration from "../../Pages/Profile/Registration";
import Wallet from "../../Pages/Profile/Wallet";
import About from "../../Pages/Others/About";
import Contact from "../../Pages/Others/Contact";
import Featured from "../../Pages/Others/Featured";
import Notfound from "../../Pages/NotFound/Notfound";

import Header from "../../Components/Header/Header";
import Login from './../../Pages/Profile/Login';
const UnProtectedRoute = () => {
  return (
    <Fragment>

    <Header></Header>
    <Routes>
     
     
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<Registration/>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/featured" element={<Featured></Featured>}></Route>
      <Route path="*" element={<Notfound></Notfound>}></Route>
    </Routes>
  </Fragment>
  )
}

export default UnProtectedRoute