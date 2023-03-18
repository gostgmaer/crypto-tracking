import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./Context/AppContext/GlobalContext";
import { AppRestApiProvider } from "./Context/AppContext/GlobalApiCallContext";
import { AuthProvider } from "./Context/Auth/globalAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <AppProvider>
      <AppRestApiProvider>
        <App />
      </AppRestApiProvider>
    </AppProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
