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

import axios from "axios";
import { BASE_URL } from "./BaseUrl";
let cvCountApi = `${BASE_URL}/intern-management/recruiter/cv-count`;
let notify = `${BASE_URL}/intern-management/member/notification-display`;
let organize = `${BASE_URL}/intern-management/recruiter/organizers`;
let summary = `${BASE_URL}/intern-management/recruiter/summary`;
let profileApi = `${BASE_URL}/intern-management/member/logged-profile`;                 

export const requestOne = () =>
  axios.get(cvCountApi, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });

  export const requestTwo = () =>
  axios.get(notify, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });

  export const requestThree = () =>
  axios.get(organize, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });

  export const requestFour = () =>
  axios.get(summary, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });

  export const requestFive = () =>
  axios.get(profileApi, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });
 
// const requestTwo = axios.get(two);
// const requestThree = axios.get(three);
