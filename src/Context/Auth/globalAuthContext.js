import React, { useContext, useState, useEffect } from "react";
const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);


  const updateUser = () => {
    setUser(true)
  }

  return <AuthContext.Provider value={{
    updateUser,user
  }}>{children}</AuthContext.Provider>;
};

export const useGlobalAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
