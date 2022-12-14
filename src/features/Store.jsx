import { configureStore } from "@reduxjs/toolkit";
import company from "./RegisterSlice";
import dash from "./dashBoardSlice"

export const store = configureStore({
  reducer: {
    counter: company,
    dashboard: dash
  },
});

