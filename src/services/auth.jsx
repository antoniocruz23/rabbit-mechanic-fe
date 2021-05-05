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
      cookie.save("auht_by_cookie", response.token);
    })
    .catch((error) => {
      console.error(error);
    });
};

const registerEmployee = (firstName, lastName, username, password, role) => {
  return fetch(URL_API + "employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookie.load("auht_by_cookie"),
    },
    body: JSON.stringify({ firstName, lastName, username, password, role }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong on api server!");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const updateEmployee = (id, firstName, lastName, role) => {
  return fetch(URL_API + `employees/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookie.load("auht_by_cookie"),
    },
    body: JSON.stringify({ firstName, lastName, role }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong on api server!");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const deleteEmployee = (id) => {
  return fetch(URL_API + `employees/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + cookie.load("auht_by_cookie"),
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong on api server!");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const registerCustomer = (firstName, lastName, address, email, cellNumber) => {
  return fetch(URL_API + "customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookie.load("auht_by_cookie"),
    },
    body: JSON.stringify({ firstName, lastName, address, email, cellNumber }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong on api server!");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const updateCustomer = (
  id,
  firstName,
  lastName,
  address,
  email,
  cellNumber
) => {
  return fetch(URL_API + `customers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookie.load("auht_by_cookie"),
    },
    body: JSON.stringify({ firstName, lastName, address, email, cellNumber }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong on api server!");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const deleteCustomer = (id) => {
  return fetch(URL_API + `customers/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + cookie.load("auht_by_cookie"),
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong on api server!");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const logout = () => {
  cookie.remove("auht_by_cookie");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  registerEmployee,
  updateEmployee,
  deleteEmployee,
  registerCustomer,
  updateCustomer,
  deleteCustomer,
  logout,
};
