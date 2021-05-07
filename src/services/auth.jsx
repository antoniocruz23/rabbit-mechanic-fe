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
      return response.json();
    })
    .then((response) => {
      if (response.token) {
        cookie.save("auth_by_cookie", response.token);
        cookie.save("current_user", response.principal);
      } else {
        alert(response.message);
      }
    });
};

const logout = () => {
  cookie.remove("auth_by_cookie");
  cookie.remove("current_user");
};

const loggedIn = () => {
  return true;
};

const currentUserName = () => {
  const info = cookie.load("current_user");
  return info.firstName;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  loggedIn,
  logout,
  currentUserName,
};
