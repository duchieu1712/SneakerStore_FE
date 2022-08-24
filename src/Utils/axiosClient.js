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
    // const token = TokenService.getLocalAccessToken();
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxNCwidXNlcm5hbWUiOiJOZ3V5ZW4gVmFuIEMiLCJlbWFpbCI6Im5ndXllbjEyQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJGpsejc4YjduaWtyUW0zWk5FT0Q3emVDYVNQdWFkWWNZbUN5UmN5eXJkZzNFSlRmRFpJUVRtIiwicGhvbmUiOiIwOTIzNTY0ODQ2IiwiY3JlYXRlZF9kYXRlIjoiMjAyMi0wOC0yM1QwODo0NjowMi4wMDBaIiwiYWRkcmVzcyI6IjIwIMSQxrDhu51uZyBz4buRIDUsIFEuNywgVFAuSENNIiwidXNlcl90eXBlIjoiMCIsInN0YXR1cyI6MH0sImlhdCI6MTY2MTMyMjg0MSwiZXhwIjoxNjYxNDA5MjQxfQ.3_je_va5depRDP8CoZyAtY6ymNoqIsIfQqsFnlv9U_c'
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);