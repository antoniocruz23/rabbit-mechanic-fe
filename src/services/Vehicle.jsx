import cookie from "react-cookies";

const URL_API = "http://localhost:8080/api/cars";

const createVehicle = (userId, brand, engineType, plate) => {
  return fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookie.load("auth_by_cookie"),
    },
    body: JSON.stringify({ userId, brand, engineType, plate }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.carId) {
        alert("Created Successfully");
      } else {
        alert(response.message);
      }
    })
    .catch((response) => {
      alert(response);
    });
};

const deleteVehicle = (id) => {
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
      if (response.carId) {
        alert("Deleted Successfully");
      } else {
        alert(response.message);
      }
    })
    .catch((response) => {
      alert(response);
    });
};

const updateVehicle = (id, brand, engineType, plate) => {
  return fetch(URL_API + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookie.load("auth_by_cookie"),
    },
    body: JSON.stringify({ brand, engineType, plate }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.carId) {
        alert("Updated Successfully");
      } else {
        alert(response.message);
      }
    })
    .catch((response) => {
      alert(response);
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createVehicle,
  deleteVehicle,
  updateVehicle,
};
