import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseApi from "../services/BaseApi";
import { BASE_URL } from "../services/BaseUrl";
import moment from "moment";

let currentDate = moment().format("YYYY-MM-DD");

// export const fetchAsyncSearchNotifi = createAsyncThunk(
//   "recent/fetchAsyncSearchNotifi",
//   async (payload) => {
//     console.log("entered search", payload);
//     const response = await BaseApi.get(
//       `/intern-management/member/notifications-search?key=${payload}`
//     );
//     return response.data;
//   }
// );

export const fetchAsyncSearchNotifi = createAsyncThunk(
  "recent/fetchAsyncSearchNotifi",

  async (payload) => {
    console.log("entered search", payload);


    const response = await BaseApi.get(
      `/intern-management/member/notifications-search?key=${payload}`,

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

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    // userDetails: {},
    searchdata: {},
    favourites: [],
    picture: [],
    search: {},
    invite: "",
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

    removeOneProfile: (state, { payload }) => {
      console.log(payload);
      let indexOfEmail = state.favourites.indexOf(payload);
      let test = [...state.favourites];
      let removedItem = test.splice(indexOfEmail, 1);
      state.favourites = test;
      let allPictures = [...state.picture];
      let removedPicture = allPictures.splice(indexOfEmail, 1);
      state.picture = allPictures;
      // console.log('TEST',test);
      // state.favourites = state.favourites.filter(
      //   (place) => place !== payload
      // );
      // state.favourites=[]
      // state.favourites = state.favourites.filter((data) => data.id !== payload.id);
    },
    // removeOneProfile: (state) => {
    //   state.favourites = [];
    // },
    addPicture: (state, { payload }) => {
      state.picture.unshift(payload);
    },
    addDeclineAccept: (state, { payload }) => {
      state.invite = payload;
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
export const { removeOneProfile, addOneProfile, addPicture, addDeclineAccept } =
  notificationSlice.actions;
export const getProfiles = (state) => state.notification.favourites;
export const getPicture = (state) => state.notification.picture;
export const getSearchNoti = (state) => state.notification.search;
export const getAcceptDecline = (state) => state.notification.invite;
export default notificationSlice.reducer;
