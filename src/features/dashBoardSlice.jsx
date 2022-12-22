import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseApi from "../services/BaseApi";
import { BASE_URL } from "../services/BaseUrl";
import moment from "moment";

let currentDate = moment().format("YYYY-MM-DD");
const yesterdayDate = moment().subtract(1,'days').format('YYYY-MM-DD');
const from = moment().subtract(1,'months').format('YYYY-MM-01');
const to= moment().subtract(2,'days').format('YYYY-MM-DD');
const fromprevMonth = moment().subtract(2,'months').format('YYYY-MM-01');
const toprevMonth= moment().subtract(2,'months').format('YYYY-MM-30');
const toYear = moment().subtract(1,'years').format('YYYY-MM-DD');
const fromYear = moment().subtract(1,'years').format('YYYY-MM-DD');


// it has both sendInvite and dashboard slice features-------------**********--------------------------------

export const fetchAsyncSearchInvitePgToday = createAsyncThunk(
  "recent/fetchAsyncSearchInvitePgToday",
  async (payload) => {
    console.log("entered search fetchAsyncSearchInvitePgToday", payload);
    const response = await BaseApi.get(
      `/intern-management/recruiter/invitation-search`,
      {
        params: {
          value: "1",
          toDate: currentDate,
          fromDate: currentDate,
          name: payload,
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  }
);

export const fetchAsyncSearchInvitePgYesterday = createAsyncThunk(
  "recent/fetchAsyncSearchInvitePgYesterday",
  async (payload) => {
    console.log("entered search", payload);
    const response = await BaseApi.get(
      `/intern-management/recruiter/invitation-search`,
      {
        params: {
          value: "1",
          toDate: yesterdayDate,
          fromDate: yesterdayDate,
          name: payload,
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  }
);

export const fetchAsyncSearchInvitePgMonth = createAsyncThunk(
  "recent/fetchAsyncSearchInvitePgMonth",
  async (payload) => {
    console.log("entered search", payload);
    const response = await BaseApi.get(
      `/intern-management/recruiter/invitation-search`,
      {
        params: {
          value: "2",
          toDate: to,
          fromDate: from,
          name: payload,
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  }
);

export const fetchAsyncSearchInvitePgPrevMonth = createAsyncThunk(
  "recent/fetchAsyncSearchInvitePgPrevMonth",
  async (payload) => {
    console.log("entered search", payload);
    const response = await BaseApi.get(
      `/intern-management/recruiter/invitation-search`,
      {
        params: {
          value: "3",
          toDate: toprevMonth,
          fromDate: fromprevMonth,
          name: payload,
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  }
);
export const fetchAsyncSearchInvitePgYear = createAsyncThunk(
  "recent/fetchAsyncSearchInvitePgYear",
  async (payload) => {
    console.log("entered search", payload);
    const response = await BaseApi.get(
      `/intern-management/recruiter/invitation-search`,
      {
        params: {
          value: "3",
          toDate: toYear,
          fromDate: fromYear,
          name: payload,
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  }
);



export const fetchAsyncSearchAB = createAsyncThunk(
  "recent/fetchAsyncSearch",
  async (payload) => {
    console.log("entered search", payload);
    // const response = await BaseApi.get(

      // `/intern-management/recruiter/assign-board-search?key=${payload}`,
      
    // );
    const response = await BaseApi.get(
      `/intern-management/recruiter/assign-board-search?key=${payload}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
        },
      }
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
    searchdata2: {},
    searchdataYesterday:{},
    searchdataMonth:{},
    searchPrevMonth:{},
    searchYear:{},
    candidate: "",
    candidateInviteId:"",
    email: " ",
    name: "",
    response:"",
  },

  reducers: {
    addUser: (state, { payload }) => {
      state.userDetails = payload;
    },
    addSearch: (state, { payload }) => {
      state.searchdata = { payload };
    },
    addCandidateInviteId:(state,{payload})=>{
      state.candidateInviteId =payload;
    },
    addCandidateId: (state, { payload }) => {
      state.candidate = payload;
    },
    addOrganEmail: (state, { payload }) => {
      state.email = payload;
    },
    addOrgNameChng: (state, { payload }) => {
      state.name = payload;
    },
    addResponse:(state,{payload}) =>{
      state.response=payload;
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
    [fetchAsyncSearchInvitePgToday.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succefully!!!");
      return { ...state, searchdata2: payload };
    },
    [fetchAsyncSearchInvitePgToday.rejected]: () => {
      console.log("Rejected....");
    },
    [fetchAsyncSearchInvitePgYesterday.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succefully!!!");
      return { ...state, searchdataYesterday: payload };
    },
    [fetchAsyncSearchInvitePgYesterday.rejected]: () => {
      console.log("Rejected....");
    },
    [fetchAsyncSearchInvitePgMonth.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succefully!!!");
      return { ...state, searchdataMonth: payload };
    },
    [fetchAsyncSearchInvitePgMonth.rejected]: () => {
      console.log("Rejected....");
    },

    [fetchAsyncSearchInvitePgPrevMonth.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succefully!!!");
      return { ...state, searchPrevMonth: payload };
    },
    [fetchAsyncSearchInvitePgPrevMonth.rejected]: () => {
      console.log("Rejected....");
    },

    [fetchAsyncSearchInvitePgYear.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succefully!!!");
      return { ...state, searchYear: payload };
    },
    [fetchAsyncSearchInvitePgYear.rejected]: () => {
      console.log("Rejected....");
    },

  },
});
export const {
  addUser,
  addSearch,
  addCandidateId,
  addOrganEmail,
  addOrgNameChng,
  addCandidateInviteId,
  addResponse,
} = DashboardSlice.actions;
export const getResponseTrue= (state) => state.dashboard.response;
export const getCanId = (state) => state.dashboard.candidate;
export const getCanInviteId= (state) => state.dashboard.candidateInviteId;
export const getSearch = (state) => state.dashboard.searchdata;
export const getsearchdataToday = (state) => state.dashboard.searchdata2;
export const getSearchDataYesterday = (state) => state.dashboard.searchdataYesterday;
export const getSearchDataMonth = (state)=> state.dashboard.searchdataMonth;
export const getSearchPrevMonth = (state)=> state.dashboard.searchPrevMonth; 
export const getsearchYear= (state) => state.dashboard.searchYear;
export const getCandEmail = (state) => state.dashboard.email;
export const getOrgNameChng = (state) => state.dashboard.name;

export default DashboardSlice.reducer;
