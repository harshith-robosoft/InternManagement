
import axios from "axios";
import { BASE_URL } from "./BaseUrl";

let profileApi = `${BASE_URL}/intern-management/member/logged-profile`; //get
let assignOrganizer = `${BASE_URL}/intern-management/recruiter/organizer-assignation`; //put
let assignSearch = `${BASE_URL}/intern-management/recruiter/assign-board-search?location=Udupi`; //get by params

// let two =
//   "https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt";
// let three =
//   "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";
  const token= sessionStorage.getItem("auth")
  export const profileInfo = () =>
  axios.get(profileApi, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
