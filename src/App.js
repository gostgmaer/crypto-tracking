import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./Utils/Router/Router";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import { TailSpin } from "react-loader-spinner";
import { useGlobalAppContext } from "./Context/AppContext/GlobalContext";
import React, { useEffect } from "react";
import Circularprogress from "./Components/Loader/Circularprogress";
import { useGlobalRestApiContext } from "./Context/AppContext/GlobalApiCallContext";
import { useGlobalAuth } from "./Context/Auth/globalAuthContext";
import UnProtectedRoute from "./Utils/Router/UnProtectedRoute";

function App() {
  const { loading } = useGlobalRestApiContext();
  const { updateUser,authLoading, user, setUser, checkIfLogedIn } = useGlobalAuth();

  useEffect(() => {
    checkIfLogedIn();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {user ? <Router></Router> : <UnProtectedRoute />}
      </div>
      {loading &&  <Circularprogress />}
      {authLoading && <Circularprogress />}
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
