import { useState } from "react";
import AuthService from "../../../../../services/Customer";

import "../../../../styles/Card.css";

const Card = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [cellNumber, setCellNumber] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    AuthService.registerCustomer(
      firstName,
      lastName,
      address,
      email,
      cellNumber
    ).then(
      () => {},
      (error) => {
        const errMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(errMessage);
      }
    );
  };

  return (
    <>
      <div className="card-body" onSubmit={onSubmit}>
        <form class="card-form">
          <h5 class="card-title">Customer Information</h5>
          <div className="card-row">
            <div className="card-column">
              <div id="firstName">
                <label class="form-label">First Name</label>
                <input
                  required
                  placeholder="Enter first name"
                  type="text"
                  class="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="card-column">
              <div id="lastName">
                <label class="form-label">Last Name</label>
                <input
                  required
                  placeholder="Enter last name"
                  type="text"
                  class="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="align-items-center card-row">
              <div className="card-column">
                <div id="address">
                  <label class="form-label">Address</label>
                  <input
                    required
                    placeholder="Enter address"
                    type="text"
                    class="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="card-column">
                <div id="email">
                  <label class="form-label">Email</label>
                  <input
                    required
                    placeholder="Enter email"
                    type="email"
                    class="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="card-row">
              <div className="card-column">
                <div id="cellNumber">
                  <label class="form-label">Cell Number</label>
                  <input
                    required
                    placeholder="Enter Cell Number"
                    type="text"
                    class="form-control"
                    value={cellNumber}
                    onChange={(e) => setCellNumber(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="button-container-create">
              <button type="submit" class="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Card;
