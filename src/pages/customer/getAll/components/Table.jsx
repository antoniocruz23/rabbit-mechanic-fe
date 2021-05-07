import { useEffect, useState } from "react";
import cookie from "react-cookies";

import "../../../styles/Table.css";

export default function Table() {
  const [customersList, setCustomersList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch("http://localhost:8080/api/customers", {
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
            setCustomersList(response.results);
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
      <h1 id="table-title">All Customers</h1>
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
            {customersList.map((users) => {
              return (
                <tr className="table-body" key={users.customerId}>
                  <td id="id-body"> {users.customerId} </td>
                  <td> {users.firstName} </td>
                  <td> {users.lastName} </td>
                  <td> {users.address} </td>
                  <td> {users.email} </td>
                  <td> {users.cellNumber} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
