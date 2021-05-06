import { useState } from "react";
import AuthService from "../../../../../services/Vehicle";

import "../../../../styles/Card.css";

const Card = () => {
  const [brand, setBrand] = useState("");
  const [engineType, setEngineType] = useState("");
  const [plate, setPlate] = useState("");
  const [id, setId] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    AuthService.updateVehicle(id, brand, engineType, plate).then(
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
          <h5 class="card-title">Update Vehicle Information</h5>
          <div className="card-row">
            <div className="card-column">
              <div id="id">
                <label class="form-label">Id</label>
                <input
                  required=""
                  placeholder="Enter vehicle id to update"
                  type="text"
                  class="form-control"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="card-column">
              <div id="brand">
                <label class="form-label">Brand</label>
                <input
                  required=""
                  placeholder="Enter brand"
                  type="text"
                  class="form-control"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="card-column">
              <div id="engineType">
                <label class="form-label">Engine Type</label>
                <input
                  required=""
                  placeholder="Enter engine type"
                  type="text"
                  class="form-control"
                  value={engineType}
                  onChange={(e) => setEngineType(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="card-row">
              <div className="card-column">
                <div id="plate">
                  <label class="form-label">Plate</label>
                  <input
                    required=""
                    placeholder="Enter plate"
                    type="text"
                    class="form-control"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value)}
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
