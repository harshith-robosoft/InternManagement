import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const postLogin = createAsyncThunk(
//   "Authority-Login",
//   axios({
//     method: "post",
//     url: "/user/12345",
//     data: {
//       firstName: "Fred",
//       lastName: "Flintstone",
//     },
//   })
// );

export const multiStepSlice = createSlice({
  name: "multiStep",
  initialState: {
    generalInfo: {},
    workHistory: {},
    aboutYou: {},
  },
  reducers: {
    addGeneralInfo: (state, { payload }) => {
      state.generalInfo = payload;
    },
    addWorkHistory: (state, { payload }) => {
      state.workHistory = payload;
    },
    addAboutYou: (state, { payload }) => {
      state.aboutYou = payload;
    },
  },
});

export const { addGeneralInfo, addWorkHistory, addAboutYou } =
  multiStepSlice.actions;
// export const getProfileLink = (state) => state.counter.profileLink;
// export const getcompany = (state) => state.counter.company;
// export const getInstitute = (state) => state.counter.institute;
// export const getName = (state) => state.counter.firstScreenName;
// export const getToken = (state) => state.counter.token;
export const getGeneralInfo = (state) => state.multiStep.generalInfo;
export const getWorkInfo = (state) => state.multiStep.workHistory;
export const getAboutYou = (state) => state.multiStep.aboutYou;

export default multiStepSlice.reducer;
