
import axios from "axios";
import { BASE_URL } from "./BaseUrl";

let profileApi = `${BASE_URL}/intern-management/member/logged-profile`; //get
let assignOrganizer = `${BASE_URL}/intern-management/recruiter/organizer-assignation`; //put
// let assignSearch = `${BASE_URL}/intern-management/recruiter/assign-board-search?location=Udupi`; //get by params
let organizeData = `${BASE_URL}/intern-management/recruiter/available-organizers`;
let assignPageData = `${BASE_URL}/intern-management/recruiter/assignboard`; //get

// let two =
//   "https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt";
// let three =
//   "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";
//   const token= sessionStorage.getItem("auth")
  export const profileInfo = () =>
  axios.get(profileApi, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });

  export const pageInfo = () =>
  axios.get(assignPageData, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });

  export const organizerInfo = () =>
  axios.get(organizeData, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });

//   export const organizerInfo = () =>
//   axios.post('http://www.example.com/api/endpoint', {
//   body: {
//     candidateId : 1,
//     organizerEmail : "organizer1@gmail.com",
//     interviewDate : "2022-12-08"
//   },
//   headers: {
//     Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
//   }
// })
// .then(response => {
//   // handle success
// })
// .catch(error => {
//   // handle error
// });

//   export const otpVerify = async (userData) => {
//     //   console.log(userData);
//     try {
//       const response = await axios.put(
//         `${BASE_URL}/intern-management/member-credentials/otp-verification`,
//         userData
//       );
//       console.log(response.data);
//       return response.data;
//     } catch (err) {
//       console.log(err);
//     }
//   };
