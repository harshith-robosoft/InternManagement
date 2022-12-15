import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseApi from "../services/BaseApi";
import { BASE_URL } from "../services/BaseUrl";

export const fetchAsyncSearchAB = createAsyncThunk(
  "recent/fetchAsyncSearch",
  async (payload) => {
    console.log("entered search", payload);
    const response = await BaseApi.get(
      `/intern-management/recruiter/assign-board-search?key=${payload}`
    );
    return response.data;
  }
);

// not using userdetails

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    userDetails: {},
    searchdata: {},
    candidate:"",
    email:" ",
    name:""
  },

  reducers: {
    addUser: (state, { payload }) => {
      state.userDetails = payload;
    },
    addSearch: (state, { payload }) => {
      state.searchdata = { payload };
    },
  

    addCandidateId:(state,{payload}) =>{
      state.candidate =payload;
    },
    addOrganEmail:(state,{payload}) =>{
      state.email=payload;
    },
    addOrgNameChng:(state,{payload}) =>{
      state.name=payload;
    }
   
  },
  extraReducers: {
    [fetchAsyncSearchAB.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succefully!!!");
      return { ...state, searchdata: payload };
    },
    [fetchAsyncSearchAB.rejected]: () => {
      console.log("Rejected....");
    },
  },
});
export const { addUser, addSearch,addCandidateId,addOrganEmail,addOrgNameChng } = DashboardSlice.actions;
export const getCanId = (state) => state.dashboard.candidate;
export const getSearch = (state) => state.dashboard.searchdata;
export const getCandEmail = (state) => state.dashboard.email;
export const getOrgNameChng = (state) => state.dashboard.name;

export default DashboardSlice.reducer;
