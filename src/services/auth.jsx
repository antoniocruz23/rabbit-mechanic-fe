import cookie from "react-cookies";

const URL_API = "http://localhost:8080/api/";

const login = (username, password) => {
  return fetch(URL_API + "auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong on api server!");
      }
    })
    .then((response) => {
      cookie.save("auth_by_cookie", response.token);
    })
    .catch((error) => {
      console.error(error);
    });
};

const logout = () => {
  cookie.remove("auth_by_cookie");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  logout,
};
