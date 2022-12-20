
import axios from "axios";
import { BASE_URL } from "./BaseUrl";

let displayNotification= `${BASE_URL}/intern-management/member/notifications`; //get
let profileApi = `${BASE_URL}/intern-management/member/logged-profile`; //get
let organizersData = `${BASE_URL}/intern-management/member/members`; //get


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
