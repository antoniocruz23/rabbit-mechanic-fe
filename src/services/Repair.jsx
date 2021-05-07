import cookie from "react-cookies";

const URL_API = "http://localhost:8080/api/repairs";

const createRepair = (
  carId,
  repairName,
  repairDescription,
  startDate,
  endDate,
  price
) => {
  return fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookie.load("auth_by_cookie"),
    },
    body: JSON.stringify({
      carId,
      repairName,
      repairDescription,
      startDate,
      endDate,
      price,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.repairId) {
        alert("Created Successfully");
      } else {
        alert(response.message);
      }
    });
};

const deleteRepair = (id) => {
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

const updateRepair = (
  id,
  repairName,
  repairDescription,
  startDate,
  endDate,
  price
) => {
  return fetch(URL_API + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookie.load("auth_by_cookie"),
    },
    body: JSON.stringify({
      repairName,
      repairDescription,
      startDate,
      endDate,
      price,
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createRepair,
  deleteRepair,
  updateRepair,
};
