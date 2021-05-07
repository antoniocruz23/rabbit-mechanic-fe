import { useEffect, useState } from "react";
import cookie from "react-cookies";

import "../../../styles/Table.css";

export default function Table() {
  const [user, setUser] = useState({});
  const [id, setId] = useState("");

  useEffect(() => {
    async function fetchData() {
      fetch(`http://localhost:8080/api/customers/${id}`, {
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
      <h1 id="table-title">Customer</h1>
      <div className="table-employees">
        <table id="table-results">
          <tbody>
            <tr className="table-header" key="">
              <th id="id-header">Id </th>
              <th>First Name </th>
              <th>Last Name </th>
              <th>Address </th>
              <th>Email </th>
              <th>Cell Number </th>
            </tr>
            <tr className="table-body" key={user.customerId}>
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
              <td> {user.firstName} </td>
              <td> {user.lastName} </td>
              <td> {user.address} </td>
              <td> {user.email} </td>
              <td> {user.cellNumber} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
