import { useEffect, useState } from "react";
import cookie from "react-cookies";

import "../../../styles/Table.css";

export default function Table() {
  const [vehiclesList, setVehiclesList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch("http://localhost:8080/api/cars", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + cookie.load("auth_by_cookie"),
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (response.results) {
            setVehiclesList(response.results);
          } else {
            alert(response.message);
          }
        })
        .catch((response) => {
          alert(response);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="table-page">
      <h1 id="table-title">All Vehicles</h1>
      <div className="table-employees">
        <table id="table-results">
          <tbody>
            <tr className="table-header" key="">
              <th id="id-header">Id </th>
              <th id="id-header">Customer Id </th>
              <th>Brand </th>
              <th>Engine Type </th>
              <th>Plate </th>
            </tr>
            {vehiclesList.map((users) => {
              return (
                <tr className="table-body" key={users.carId}>
                  <td id="id-body"> {users.carId} </td>
                  <td id="id-body"> {users.userId} </td>
                  <td> {users.brand} </td>
                  <td> {users.engineType} </td>
                  <td> {users.plate} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
