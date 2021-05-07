import { useEffect, useState } from "react";
import cookie from "react-cookies";

import "../../../styles/Table.css";

export default function Table() {
  const [repairsList, setRepairList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch("http://localhost:8080/api/repairs/status", {
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
            setRepairList(response.results);
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
      <h1 id="table-title">Active Repairs</h1>
      <div className="table-employees">
        <table id="table-results">
          <tbody>
            <tr className="table-header" key="">
              <th id="id-header">Id </th>
              <th id="id-header">Vehicle Id </th>
              <th>Name </th>
              <th>Description </th>
              <th>Start Date </th>
              <th>End Date </th>
              <th id="id-header">Price </th>
            </tr>
            {repairsList.map((users) => {
              return (
                <tr className="table-body" key={users.repairId}>
                  <td id="id-body"> {users.repairId} </td>
                  <td id="id-body"> {users.carId} </td>
                  <td> {users.repairName} </td>
                  <td> {users.repairDescription} </td>
                  <td> {users.startDate} </td>
                  <td> {users.endDate} </td>
                  <td id="id-body"> {users.price} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
