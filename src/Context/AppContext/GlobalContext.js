import React, { useContext,useState,useEffect } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    
    const [loader, setLoader] = useState(false);
    const [appLoader, setAppLoader] = useState(false);

    const updateLoader=()=>{
        setLoader(!loader)
    }

  return <AppContext.Provider value={{
    loader,updateLoader
  }}>{children}</AppContext.Provider>;
};

export const useGlobalAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
