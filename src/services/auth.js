import { BASE_URL } from "./BaseUrl";
import axios from "axios";

export const login = async (userData) => {
  //   console.log(userData);
  //   try {
  //     const response = await axios.post(
  //       `${BASE_URL}/intern-management/member-credentials/login`,

  //     );
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   axios
  //     .post(`${BASE_URL}/intern-management/member-credentials/login`, {
  //       emailId: "nithin.cse.rymec@gmail.com",
  //       password: "3022",
  //       role: "Authority",
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  fetch(`${BASE_URL}/intern-management/member-credentials/login`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      emailId: "nithin.cse.rymec@gmail.com",
      password: "3022",
      role: "Authority",
    }),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
};
