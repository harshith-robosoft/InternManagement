
import axios from "axios";
import { BASE_URL } from "./BaseUrl";

let displayNotification= `${BASE_URL}/intern-management/member/notifications`; //get


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
