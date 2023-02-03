import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./Utils/Router/Router";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import { TailSpin } from "react-loader-spinner";
import { useGlobalAppContext } from "./Context/AppContext/GlobalContext";



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
