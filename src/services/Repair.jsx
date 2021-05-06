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
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createRepair,
  deleteRepair,
  updateRepair,
};
