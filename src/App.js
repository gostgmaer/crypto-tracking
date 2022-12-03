import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./Utils/Router/Router";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Router></Router>
      </div>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
