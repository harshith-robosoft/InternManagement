
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

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    company: ["1"],
    institute:["1"],
  },
  reducers: {
    addcompany: (state, { payload }) => {
      state.company.push(payload);
    },
    addInstitute:(state,{payload})=>{
        state.institute.push(payload);
    }
  },
});

export const { addcompany,addInstitute } = counterSlice.actions;
export const getcompany = (state) => state.counter.company;
export const getInstitute = (state) => state.counter.institute;

export default counterSlice.reducer;
