import { useEffect, useState } from "react";
import cookie from "react-cookies";

import "../../../styles/Table.css";

export default function Table() {
  const [employeesList, setEmployeesList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch("http://localhost:8080/api/employees", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + cookie.load("auth_by_cookie"),
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setEmployeesList(response.results);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="table-page">
      <h1 id="table-title">All Employees</h1>
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
            {employeesList.map((users) => {
              return (
                <tr className="table-body" key={users.employeeId}>
                  <td id="id-body"> {users.employeeId} </td>
                  <td> {users.firstName} </td>
                  <td> {users.lastName} </td>
                  <td> {users.username} </td>
                  <td> {users.role} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
