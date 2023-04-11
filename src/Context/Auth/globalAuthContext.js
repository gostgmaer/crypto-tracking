import jwtDecode from "jwt-decode";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthInvokeAPI from "../../Utils/ApiCall/AuthInvoke";
import { useGlobalRestApiContext } from "../AppContext/GlobalApiCallContext";
const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
 
  // const {loading,setLoading} = useGlobalRestApiContext()

  const checkIfLogedIn = () => {
    setAuthLoading(true)
    if (window.sessionStorage.getItem("user")) {
        const currentUser = JSON.parse(window.sessionStorage.getItem("user"));
        // setUser(JSON.parse(currentUser))
    
        setUser(jwtDecode(currentUser?.access_token));
       
    }

    setAuthLoading(false)
   
  };

  const logOutHandler =()=>{
    window.sessionStorage.removeItem("user");
    setUser(null)
  }
  const loginHandler = async (val) => {
    setAuthLoading(true)
    const obj = {
      username: val.userName,
      pass: val.password,
      remember: val.remember,
    };
   
    const bodyObj = {
      searchKey: "mail",
      searchVal: "varun.sengupta@inadev.com",
      password: "VldScGFzc3dvcmQxIQ==",
      grant_type: "password",
      provider_type: "ldap-internal",
    };
   try {
    const res = await AuthInvokeAPI(
      "userauth/authservice/session",
      "post",
      bodyObj,
      {}
    );
   
    window.sessionStorage.setItem("user", JSON.stringify(res));
    setUser(jwtDecode(res.access_token));
  
   
   } catch (error) {
   
   }
    setAuthLoading(false)
  };

  const updateUser = () => {
    setUser(true);
  };

  return (
    <AuthContext.Provider
      value={{
        updateUser,
        user,
        loginHandler,
        checkIfLogedIn,authLoading,logOutHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
