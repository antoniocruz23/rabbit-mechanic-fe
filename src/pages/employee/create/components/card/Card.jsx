import { useState } from "react";
import AuthService from "../../../../../services/Employee";

import "../../../../styles/Card.css";

const Card = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    AuthService.registerEmployee(
      firstName,
      lastName,
      username,
      password,
      role
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
          <h5 class="card-title">Employee Information</h5>
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
                <div id="username">
                  <label class="form-label">Username</label>
                  <input
                    required
                    placeholder="Enter username"
                    type="text"
                    class="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="card-column">
                <div id="password">
                  <label class="form-label">Password</label>
                  <input
                    required
                    placeholder="Enter password"
                    type="password"
                    class="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="card-row">
              <div className="card-column">
                <div id="role">
                  <label class="form-label">Role</label>
                  <input
                    required
                    placeholder="Enter role"
                    type="text"
                    class="form-control"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
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
