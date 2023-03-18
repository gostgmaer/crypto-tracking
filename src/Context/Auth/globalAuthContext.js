import jwtDecode from "jwt-decode";
import React, { useContext, useState, useEffect } from "react";
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
        console.log(currentUser);
        setUser(jwtDecode(currentUser?.access_token));
        console.log(user);
    }

    setAuthLoading(false)
   
  };

  const loginHandler = async (val) => {
    setAuthLoading(true)
    const obj = {
      username: val.userName,
      pass: val.password,
      remember: val.remember,
    };
    console.log(obj);
    const bodyObj = {
      searchKey: "mail",
      searchVal: "varun.sengupta@inadev.com",
      password: "VldScGFzc3dvcmQxIQ==",
      grant_type: "password",
      provider_type: "ldap-internal",
    };
    const res = await AuthInvokeAPI(
      "userauth/authservice/session",
      "post",
      bodyObj,
      {}
    );
    console.log(res);
    window.sessionStorage.setItem("user", JSON.stringify(res));
    setUser(jwtDecode(res.access_token));
    console.log(user);
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
        checkIfLogedIn,authLoading
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
