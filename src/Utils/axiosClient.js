import axios from "axios";
import TokenService from "../Services/serviceToken";


export const axiosClient = axios.create({
  baseURL: "https://sneakerstorebe-v1.herokuapp.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);