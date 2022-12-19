// import { BASE_URL } from "./BaseUrl";
// import axios from "axios";

// let inviteCountApi = `${BASE_URL}/intern-management/recruiter/invites-info`; //get
// let profileApi = `${BASE_URL}/intern-management/member/logged-profile`; //get
// let today = new Date();
// let dd = today.getDate();
// let yyyy = today.getFullYear();
// let mm= today.getMonth()



// export const profileInf = () =>
// axios.get(profileApi, {
//   headers: {
//     Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
//   },
// });
// export const cardDataByDay=() =>
//  axios.request({
//     url: 'https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/invites-by-day',
//     method: 'GET',
//     headers: {
//         Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
//     },
//     data: {
      
//         date: 2022-12-19
//     }
//   })