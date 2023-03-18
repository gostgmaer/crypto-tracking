import jwtDecode from "jwt-decode";
import React, { useContext, useState, useEffect } from "react";
import AuthInvokeAPI from "../../Utils/ApiCall/AuthInvoke";
const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const checkIfLogedIn = () => {
    if (window.sessionStorage.getItem("user")) {
        const currentUser = JSON.parse(window.sessionStorage.getItem("user"));
        // setUser(JSON.parse(currentUser))
        console.log(currentUser);
        setUser(jwtDecode(currentUser?.access_token));
        console.log(user);
    }
   
  };

  const loginHandler = async (val) => {
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
        checkIfLogedIn,
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
