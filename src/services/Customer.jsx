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
      if (response.repairId) {
        alert("Updated Successfully");
      } else {
        alert(response.message);
      }
    });
};

const deleteCustomer = (id) => {
  return fetch(URL_API + `/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + cookie.load("auth_by_cookie"),
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.repairId) {
        alert("Deleted Successfully");
      } else {
        alert(response.message);
      }
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  registerCustomer,
  updateCustomer,
  deleteCustomer,
};
