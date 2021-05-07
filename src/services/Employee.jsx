import cookie from "react-cookies";

const URL_API = "http://localhost:8080/api/employees";

const registerEmployee = (firstName, lastName, username, password, role) => {
  return fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookie.load("auth_by_cookie"),
    },
    body: JSON.stringify({ firstName, lastName, username, password, role }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.employeeId) {
        alert("Created Successfully");
      } else {
        alert(response.message);
      }
    })
    .catch((response) => {
      alert(response);
    });
};

const updateEmployee = (id, firstName, lastName, role) => {
  return fetch(URL_API + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookie.load("auth_by_cookie"),
    },
    body: JSON.stringify({ firstName, lastName, role }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.employeeId) {
        alert("Updated Successfully");
      } else {
        alert(response.message);
      }
    })
    .catch((response) => {
      alert(response);
    });
};

const deleteEmployee = (id) => {
  return fetch(URL_API + `/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + cookie.load("auth_by_cookie"),
    },
  })
    .then(() => {
      alert("Deleted Successfully");
    })
    .catch((response) => {
      alert(response);
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  registerEmployee,
  updateEmployee,
  deleteEmployee,
};
