import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseApi from "../services/BaseApi";
import { BASE_URL } from "../services/BaseUrl";
import moment from "moment";

let currentDate = moment().format("YYYY-MM-DD");

export const fetchAsyncSearchNotifi = createAsyncThunk(
  "recent/fetchAsyncSearchNotifi",
  async (payload) => {
    console.log("entered search", payload);
    const response = await BaseApi.get(
      `/intern-management/member/notifications-search?key=${payload}`
    );
    return response.data;
  }
);
// not using userdetails

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    // userDetails: {},
    searchdata: {},
    favourites: [],
    picture:[],
    search:{},
    // candidate:"",
    // email:" ",
    // name:""
  },

  reducers: {
    addOneProfile: (state, { payload }) => {
      var isPresent = false;

      for (let item of state.favourites) {
        if (item === payload) {
          isPresent = true;
        }
      }

      if (!isPresent) {
        state.favourites.unshift(payload);
      }
    },

    removeOneProfile: (state, {payload}) => {
      state.favourites = state.favourites.filter(
        (place) => place !== payload
      );
      // state.favourites=[]
      // state.favourites = state.favourites.filter((data) => data.id !== payload.id);
    },
    // removeOneProfile: (state) => {
    //   state.favourites = [];
    // },
    addPicture: (state, { payload }) => {
      state.picture.push(payload);
    },
  
  },
  extraReducers: {
    [fetchAsyncSearchNotifi.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succefully!!!");
      return { ...state, search: payload };
    },
    [fetchAsyncSearchNotifi.rejected]: () => {
      console.log("Rejected....");
    },
  },
});
export const { removeOneProfile, addOneProfile,addPicture } = notificationSlice.actions;
export const getProfiles = (state) => state.notification.favourites;
export const getPicture= (state) => state.notification.picture
export const getSearchNoti = (state) => state.notification.search
export default notificationSlice.reducer;
