import { configureStore } from "@reduxjs/toolkit";
import company from "./RegisterSlice";
import dash from "./dashBoardSlice"
import prof from "./notificatonSlice"

export const store = configureStore({
  reducer: {
    counter: company,
    dashboard: dash,
    notification: prof,

  },
});

