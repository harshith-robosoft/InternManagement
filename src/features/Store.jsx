import { configureStore } from "@reduxjs/toolkit";
import company from "./RegisterSlice";
import dash from "./dashBoardSlice";
import cvSlice from "./cvAnalysisSlice"
import prof from "./notificatonSlice"
import multiStepSliceReducer from "./multiStepForm"

export const store = configureStore({
  reducer: {
    counter: company,
    dashboard: dash,
    cv: cvSlice,
    notification: prof,
    multiStep: multiStepSliceReducer,
  },
});
