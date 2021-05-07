import { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../../../services/Customer";

import "../../../../styles/DeleteCard.css";

const Card = () => {
  const [id, setId] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    AuthService.deleteCustomer(id);
  };

  return (
    <>
      <div className="card-body" onSubmit={onSubmit}>
        <form class="card-form">
          <h5 class="card-title">Delete Customer</h5>
          <div className="text-container">
            <label class="warning-text">Do you really want to delete?</label>
          </div>
          <input
            required
            placeholder="Enter customer id"
            type="text"
            class="input-delete"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>

          <div className="button-container">
            <button type="submit" class="btn btn-delete">
              Delete
            </button>
            <Link to="/home" class="btn btn-cancel">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Card;
