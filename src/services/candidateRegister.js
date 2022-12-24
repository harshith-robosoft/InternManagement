import axios from "axios";
import { BASE_URL } from "./BaseUrl";

export const registerCandidate = (formData) => {
  try {
    let response = axios.post(
      `${BASE_URL}/intern-management/candidate/register`,
      formData
    );
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
