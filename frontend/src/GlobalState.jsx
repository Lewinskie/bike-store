import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import ProductsAPI from "./api/ProductsAPI";
import UserAPI from "./api/UserAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const accessToken = async () => {
    const res = await axios.get("/user/token");
    setToken(res.data.token);
  };

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) accessToken();
  }, []);

  const state = {
    token: [token, setToken],
    ProductsAPI: ProductsAPI(),
    UserAPI: UserAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
