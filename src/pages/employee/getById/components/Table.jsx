import { useEffect, useState } from "react";
import cookie from "react-cookies";

import "../../../styles/Table.css";

export default function Table() {
  const [user, setUser] = useState({});
  const [id, setId] = useState("");

  useEffect(() => {
    async function fetchData() {
      fetch(`http://localhost:8080/api/employees/${id}`, {
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
      <h1 id="table-title">Employee</h1>
      <div className="table-employees">
        <table id="table-results">
          <tbody>
            <tr className="table-header" key="">
              <th id="id-header">Id </th>
              <th>First Name </th>
              <th>Last Name </th>
              <th>Username </th>
              <th>Role </th>
            </tr>
            <tr className="table-body" key={user.employeeId}>
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
              <td> {user.username} </td>
              <td> {user.role} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
