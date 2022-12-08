import { configureStore } from "@reduxjs/toolkit";
import company from "./RegisterSlice";

export const store = configureStore({
  reducer: {
    counter: company,
  },
});

