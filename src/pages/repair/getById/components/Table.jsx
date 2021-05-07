import { useEffect, useState } from "react";
import cookie from "react-cookies";

import "../../../styles/Table.css";

export default function Table() {
  const [user, setUser] = useState({});
  const [id, setId] = useState("");

  useEffect(() => {
    async function fetchData() {
      fetch(`http://localhost:8080/api/repairs/${id}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + cookie.load("auth_by_cookie"),
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (response) {
            setUser(response);
          } else {
            alert(response.message);
          }
        })
        .catch((response) => {
          alert(response);
        });
    }
    fetchData();
  }, [id]);

  return (
    <div className="table-page">
      <h1 id="table-title">Repair</h1>
      <div className="table-employees">
        <table id="table-results">
          <tbody>
            <tr className="table-header" key="">
              <th id="id-header">Id </th>
              <th id="id-header">Car Id </th>
              <th>Name </th>
              <th>Description </th>
              <th>Start Date </th>
              <th>End Date </th>
              <th id="id-header">Price </th>
            </tr>
            <tr className="table-body" key={user.repairId}>
              <td id="id-body">
                {" "}
                <input
                  required
                  type="text"
                  class="id-input"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                ></input>{" "}
              </td>
              <td id="id-body"> {user.carId} </td>
              <td> {user.repairName} </td>
              <td> {user.repairDescription} </td>
              <td> {user.startDate} </td>
              <td> {user.endDate} </td>
              <td id="id-body"> {user.price} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
