import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseApi from "../services/BaseApi";
import { BASE_URL } from "../services/BaseUrl";
import moment from "moment";

let currentDate = moment().format("YYYY-MM-DD");

// export const fetchAsyncSearchInvitePg2 = createAsyncThunk(
//   "recent/fetchAsyncSearch",
//   async (payload) => {
//     console.log("entered search", payload);
//     const response = await BaseApi.get(
//       `/intern-management/recruiter/invitation-search`,
//       {
//         params: {
//           value: "1",
//           toDate: currentDate,
//           fromDate: currentDate,
//           name: payload,
//         },
//         headers: {
//           Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
//         },
//       }
//     );
//     console.log(response.data);
//     return response.data;
//   }
// );

// not using userdetails

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    // userDetails: {},
    searchdata: {},
    // candidate:"",
    // email:" ",
    // name:""
  },

  reducers: {
    // addUser: (state, { payload }) => {
    //   state.userDetails = payload;
    // },
    // addSearch: (state, { payload }) => {
    //   state.searchdata = { payload };
    // },
    // addCandidateId:(state,{payload}) =>{
    //   state.candidate =payload;
    // },

  },
  extraReducers: {
    // [fetchAsyncSearchInvitePg2.fulfilled]: (state, { payload }) => {
    //   console.log("Fetched Succefully!!!");
    //   return { ...state, searchdata: payload };
    // },
    // [fetchAsyncSearchInvitePg2.rejected]: () => {
    //   console.log("Rejected....");
    // },
  },
});
export const {
  addUser,

} = notificationSlice.actions;

export default notificationSlice.reducer;
