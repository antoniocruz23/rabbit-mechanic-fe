import axios from "axios";

const URL_API = "http://localhost:8080/api/auth/";

const login = (username, password) => {
  return axios
    .post(URL_API + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const getCurrentUser = () => {
  return JSON.parse(!localStorage.getItem("user"));
};

const logout = () => {
  localStorage.removeItem("user");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  getCurrentUser,
  logout,
};
