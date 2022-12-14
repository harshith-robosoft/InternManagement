import { BASE_URL } from "./BaseUrl";
import axios from "axios";
import moment from "moment"

let inviteCountApi = `${BASE_URL}/intern-management/recruiter/invites-info`; //get
let profileApi = `${BASE_URL}/intern-management/member/logged-profile`; //get
// let today = new Date();
// let dd = today.getDate();
// let yyyy = today.getFullYear();
// let mm = today.getMonth();
// console.log(moment().subtract(1,'months').format('YYYY-MM-01'));
const from = moment().subtract(1,'months').format('YYYY-MM-01');
const to= moment().subtract(2,'days').format('YYYY-MM-DD');
const fromprevMonth = moment().subtract(2,'months').format('YYYY-MM-01');
const toprevMonth= moment().subtract(2,'months').format('YYYY-MM-30');
// var data = new FormData(yyyy-mm-dd);
export const inviteCount = () =>
  axios.get(inviteCountApi, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });
export const profileInf = () =>
  axios.get(profileApi, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });
// export const cardDataByDay=() =>
//  axios.request({
//     url: 'https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/invites-by-day',
//     method: 'GET',
//     headers: {
//         Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
//     },
//     data: {

//         date: yyyy-mm-dd
//     }
//   })
// https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/invites-by-day?date=2022-11-25
// export const cardDataByDay = (date) =>
//   axios.get(
//     `https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/invites-by-day?date=${date}`,
//     {
//       headers: {
//         Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
//       },
//     }
//   );

export const cardDataByDay = async (date) => {
  //   console.log(userData);
  try {
    const response = await axios.get(
      `https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/invites-by-day?date=${date}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
        },
      }
    );
    console.log('INvite by date',response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const cardDataByMonth = async () => {
    //   console.log(userData);
    try {
      const response = await axios.get(
        `https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/invites-by-month`,
        {
            params: { toDate: to, fromDate: from },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
          },
        }
      );
      console.log('INvite by date',response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  export const cardDataByPrevMonth = async () => {
    //   console.log(userData);
    try {
      const response = await axios.get(
        `https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/invites-by-month`,
        {
            params: { toDate:toprevMonth , fromDate: fromprevMonth },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
          },
        }
      );
      console.log('INvite by date',response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  export const cardDataByYear = async (date) => {
    //   console.log(userData);
    try {
      const response = await axios.get(
        `https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/invites-by-year?date=${date}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
          },
        }
      );
      console.log('INvite by date',response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  
//   export const candidateInvite = async (userData) => {
//     try {
//         const response = await axios.post(
//             `${BASE_URL}/intern-management/recruiter/candidate-invitation`,
//         {
//             userData
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
//           },
//         }
//       );
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };
