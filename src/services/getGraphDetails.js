// import { BASE_URL } from "./BaseUrl";
// import { useDispatch } from "react-redux";

// // const dispatch = useDispatch()

// export const getCv = async (token) => {
//   const response = await axios.get(
//     `${BASE_URL}/intern-management/recruiter/cv-count`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return response.data;
//   //   .catch(error => {
//   //     // Handle the error
//   //     console.log(error);
//   //   });
// };
import moment from "moment"
import axios from "axios";
import { BASE_URL } from "./BaseUrl";
let currentMonth = `${BASE_URL}/intern-management/recruiter/summary`;
let currentYear = `${BASE_URL}/intern-management/recruiter/annual-summary`;
                
const from = moment().subtract(1,'months').format('YYYY-MM-01');
const to = moment().subtract(1,'years').format('YYYY-MM-01');

const fromprevMonth = moment().subtract(2,'months').format('YYYY-MM-01');
export const currentMonthValues = () =>
  axios.get(currentMonth, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });
  export const prevMonthValues = () =>
  axios.get(currentMonth, {
    params: { date: from },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });

  export const pre2vMonthValues = () =>
  axios.get(currentMonth, {
    params: { date: fromprevMonth },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });

  export const currentYearValues = () =>
  axios.get(currentYear, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });

  export const prevYearValues = () =>
  axios.get(currentYear, {
    params: { date: to },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });

 
// const requestTwo = axios.get(two);
// const requestThree = axios.get(three);
