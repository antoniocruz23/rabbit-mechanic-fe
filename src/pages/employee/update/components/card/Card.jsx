import { useState } from "react";
import { useParams } from "react-router-dom";
import AuthService from "../../../../../services/auth";

import "../../../../styles/Card.css";

const Card = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const { id } = useParams();

  const onSubmit = async (e) => {
    e.preventDefault();

    AuthService.updateEmployee(id, firstName, lastName, role).then(
      () => {
        console.log("NICE");
      },
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
          <h5 class="card-title">Update Employee Information</h5>
          <div className="card-row">
            <div className="card-column">
              <div id="firstName">
                <label class="form-label">First Name</label>
                <input
                  required=""
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
                  required=""
                  placeholder="Enter last name"
                  type="text"
                  class="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="card-row">
              <div className="card-column">
                <div id="role">
                  <label class="form-label">Role</label>
                  <input
                    required=""
                    placeholder="Enter role"
                    type="text"
                    class="form-control"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="button-container">
              <button type="submit" class="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Card;
