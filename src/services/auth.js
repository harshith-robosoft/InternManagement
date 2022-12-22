import { BASE_URL } from "./BaseUrl";
import axios from "axios";

export const login = async (userData) => {
  //   console.log(userData);
  try {
    const response = await axios.post(
      `${BASE_URL}/intern-management/member-credentials/login`,
      {
        emailId: userData.email,
        password: userData.password,
        role: userData.role,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
// axios
//   .post(`${BASE_URL}/intern-management/member-credentials/login`, {
//     emailId: "nithin.cse.rymec@gmail.com",
//     password: "3022",
//     role: "Authority",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }
//   fetch(`${BASE_URL}/intern-management/member-credentials/login`, {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify({
//       emailId: "nithin.cse.rymec@gmail.com",
//       password: "3022",
//       role: "Authority",
//     }),
//   })
//     .then(function (res) {
//       return res.json();
//     })
//     .then((res) => {
//       // let token = res.token;
//       console.log("token: ", res);
//     })
//     .catch(function (res) {
//       console.log(res);
//     });
// };

export const signup = async (userData) => {
  //   console.log(userData);
  try {
    const response = await axios.post(
      `${BASE_URL}/intern-management/member-credentials/register`,
      userData
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const forgotPassword = async (userData) => {
  //   console.log(userData);
  try {
    const response = await axios.post(
      `${BASE_URL}/intern-management/member-credentials/otp`,
      userData
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const otpVerify = async (userData) => {
  //   console.log(userData);
  try {
    const response = await axios.put(
      `${BASE_URL}/intern-management/member-credentials/otp-verification`,
      userData
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const UpdatePass= async (userData) => {
  //   console.log(userData);
  try {
    const response = await axios.put(
      `${BASE_URL}/intern-management/member-credentials/password-update`,
      userData
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};


