
import axios from "axios";
import { BASE_URL } from "./BaseUrl";

let displayNotification= `${BASE_URL}/intern-management/member/notifications`; //get
let profileApi = `${BASE_URL}/intern-management/member/logged-profile`; //get
let organizersData = `${BASE_URL}/intern-management/member/members`; //get
let createEvent = `${BASE_URL}/intern-management/member/event-creation`; //get


// let two =
//   "https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt";
// let three =
//   "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";
//   const token= sessionStorage.getItem("auth")
  export const notificationData = () =>
  axios.get(displayNotification, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });
  export const profileInfoN = () =>
  axios.get(profileApi, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });
  export const organizersApi = () =>
  axios.get(organizersData, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
    },
  });

  // export const createEventApi = () =>
  // axios.get(createEvent, {
  //   headers: {
  //     Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
  //   },
  // });

  export const createEventApi = async (userData) => {
    //   console.log(userData);
    try {
      const response = await axios.post(
        `${BASE_URL}/intern-management/member/event-creation`,
   
          userData,
      
        
       { headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
          },
       }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };


  // const acceptDeclineInvite = async (id,type) => {
  //   try {
  //     const response = await axios.post(
  //       "https://app-internmanagement-221205180345.azurewebsites.net/intern-management/member/event-status-update",
  //       {
  //         notificationId : id,
  //         status : type
  //       },

  //       {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-type": "application/json",
  //           Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
  //         },
  //       }
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };