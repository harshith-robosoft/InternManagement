import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchAsyncCV = createAsyncThunk(
//     "Cv-no",
//     async (userData) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/intern-management/recruiter/cv-count`, {
//               headers: {
//                 Authorization: `Bearer ${userData.token}`,
//               },
//             });
//             console.log(response);
//           return response.data;
          
//             // Do something with the response data
//           } catch (error) {
//             // Handle the error
//             console.log(error);
//           }
          
          
//     }
//   );



  
export const DashboardSlice = createSlice({
    name: "Dashboard",
    initialState: {
      userDetails:{},
     },

    reducers: {
      addUser: (state, { payload }) => {
        state.userDetails= payload;
      },




    },
    extraReducers: {
        // [fetchAsyncPhoto.pending]: () => {
        //   console.log("Pending....");
        // },
        // [fetchAsyncPhoto.fulfilled]: (state, { payload }) => {
        //   console.log("Fetched Succefully!!!");
        //   return { ...state, imagelarge: payload };
        // },
        // [fetchAsyncPhoto.rejected]: () => {
        //   console.log("Rejected....");
        // },
    }


})
export const { addUser } = DashboardSlice.actions;


export default DashboardSlice.reducer;

