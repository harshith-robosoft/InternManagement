import axios from "axios";

export default axios.create({
  baseURL: "https://app-internmanagement-221205180345.azurewebsites.net",

  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
  },
});
