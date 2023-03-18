import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./Utils/Router/Router";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import { TailSpin } from "react-loader-spinner";
import { useGlobalAppContext } from "./Context/AppContext/GlobalContext";
import React from "react";
import Circularprogress from "./Components/Loader/Circularprogress";
import { useGlobalRestApiContext } from "./Context/AppContext/GlobalApiCallContext";



function App() {

  const {loading} = useGlobalRestApiContext()

  return (
    <BrowserRouter>
      <div className="App">
       
        <Router></Router>
      
      </div>
      {loading && <Circularprogress/>}
      <ToastContainer></ToastContainer>
     
    </BrowserRouter>
  );
}

export default App;
