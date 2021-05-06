import { useState } from "react";
import AuthService from "../../../../../services/Vehicle";

import "../../../../styles/Card.css";

const Card = () => {
  const [customerId, setCustomerId] = useState("");
  const [brand, setBrand] = useState("");
  const [engineType, setEngineType] = useState("");
  const [plate, setPlate] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    AuthService.createVehicle(customerId, brand, engineType, plate).then(
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
          <h5 class="card-title">Vehicle Information</h5>
          <div className="card-row">
            <div className="card-column">
              <div id="customerId">
                <label class="form-label">Customer Id</label>
                <input
                  required
                  placeholder="Enter customer id"
                  type="text"
                  class="form-control"
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="card-column">
              <div id="brand">
                <label class="form-label">Brand</label>
                <input
                  required
                  placeholder="Enter vehicle brand"
                  type="text"
                  class="form-control"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="align-items-center card-row">
              <div className="card-column">
                <div id="engineType">
                  <label class="form-label">Engine Type</label>
                  <input
                    required
                    placeholder="Enter engine Type"
                    type="text"
                    class="form-control"
                    value={engineType}
                    onChange={(e) => setEngineType(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="card-column">
                <div id="plate">
                  <label class="form-label">Plate</label>
                  <input
                    required
                    placeholder="Enter plate"
                    type="text"
                    class="form-control"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value)}
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
