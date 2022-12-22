import { configureStore } from "@reduxjs/toolkit";
import company from "./RegisterSlice";
import dash from "./dashBoardSlice";
import cvSlice from "./cvAnalysisSlice"

export const store = configureStore({
  reducer: {
    counter: company,
    dashboard: dash,
    cv: cvSlice,

  },
});

