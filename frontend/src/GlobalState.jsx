import React, { createContext, useState, useEffect } from "react";
// import ProductsAPI from "./api/ProductsAPI";
// import UserAPI from "./api/UserAPI";
// import axios from "axios";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {

  const state = {
   
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
