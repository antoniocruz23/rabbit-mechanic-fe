import cookie from "react-cookies";

const URL_API = "http://localhost:8080/api/customers";

const registerCustomer = (firstName, lastName, address, email, cellNumber) => {
  return fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookie.load("auth_by_cookie"),
    },
    body: JSON.stringify({ firstName, lastName, address, email, cellNumber }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.customerId) {
        alert("Created Successfully");
      } else {
        alert(response.message);
      }
    })
    .catch((response) => {
      alert(response);
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
  return fetch(URL_API + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookie.load("auth_by_cookie"),
    },
    body: JSON.stringify({
      id,
      firstName,
      lastName,
      address,
      email,
      cellNumber,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.customerId) {
        alert("Updated Successfully");
      } else {
        alert(response.message);
      }
    })
    .catch((response) => {
      alert(response);
    });
};

const deleteCustomer = (id) => {
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
  registerCustomer,
  updateCustomer,
  deleteCustomer,
};
