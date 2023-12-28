import axios from "axios";
import config from "../config";

function postLogin(credentials: { user_email: string; user_sub: string }) {
  return axios.post<{ data: { role: "partner" | "admin" | "user" } }>(`${config.API_BASE_URL}auth/login`, {
    data: credentials,
  });
}

export default {
  postLogin,
};
