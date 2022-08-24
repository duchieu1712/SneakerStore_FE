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
    const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo0LCJ1c2VybmFtZSI6Ik5ndXllbiBWYW4gQSIsImVtYWlsIjoibmd1eWVudmFuYUBlbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCREVWx1OG9kcVo5SnpxdG5lSHl0NDJ1VHFXL1NwYk13MzNOYUQ5ZHdDMGg3eTlQVTltZTRsTyIsInBob25lIjoiMDkyMzU2NDg3OSIsImNyZWF0ZWRfZGF0ZSI6IjIwMjItMDgtMjNUMDg6NDQ6MjAuMDAwWiIsImFkZHJlc3MiOiI0MCDEkMaw4budbmcgc-G7kSA1LCBRLjcsIFRQLkhDTSIsInVzZXJfdHlwZSI6IjAiLCJzdGF0dXMiOjB9LCJpYXQiOjE2NjEzMTUzMjcsImV4cCI6MTY2MTQwMTcyN30.rX-i48ZkXgRqykKn57KFkmXdfye0Wj86TpZTusovA8Y`
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);