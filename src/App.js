import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./Utils/Router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router></Router>
      </div>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
