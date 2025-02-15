import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { getLocalStorage } from "../utils/Localstorage";
import { useEffect } from "react";
import { setLocaltStorage } from "../utils/Localstorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setuserdata] = useState([]);
  

  useEffect(() => {
    setLocaltStorage();
    const { employees } = getLocalStorage();
    setuserdata(employees);
  }, []);

  return (
    <AuthContext.Provider value={[userdata, setuserdata]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
