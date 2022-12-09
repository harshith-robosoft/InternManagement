
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const postLogin = createAsyncThunk(
    "Authority-Login",
    axios({
        method: 'post',
        url: '/user/12345',
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      })
  );



export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    company: ["1"],
    institute:["1"],
    firstScreenName:"",
  },
  reducers: {
    addcompany: (state, { payload }) => {
      state.company.push(payload);
    },
    addInstitute:(state,{payload})=>{
        state.institute.push(payload);
    },
    giveName: (state, action) => {

      state.firstScreenName = action.payload;




    },
  },
});

export const { addcompany,addInstitute,giveName } = counterSlice.actions;
export const getcompany = (state) => state.counter.company;
export const getInstitute = (state) => state.counter.institute;
export const getName = (state) => state.counter.firstScreenName;


export default counterSlice.reducer;
