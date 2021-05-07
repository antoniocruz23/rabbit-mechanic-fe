import { useState } from "react";
import AuthService from "../../../../../services/Repair";

import "../../../../styles/Card.css";

const Card = () => {
  const [vehicleId, setVehicleId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    AuthService.createRepair(
      vehicleId,
      name,
      description,
      startDate,
      endDate,
      price
    );
  };

  return (
    <>
      <div className="card-body" onSubmit={onSubmit}>
        <form class="card-form">
          <h5 class="card-title">Repair Information</h5>
          <div className="card-row">
            <div className="card-column">
              <div id="vehicleId">
                <label class="form-label">Vehicle Id</label>
                <input
                  required
                  placeholder="Enter vehicle id"
                  type="text"
                  class="form-control"
                  value={vehicleId}
                  onChange={(e) => setVehicleId(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="card-column">
              <div id="name">
                <label class="form-label">Name</label>
                <input
                  required
                  placeholder="Enter repair name"
                  type="text"
                  class="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="align-items-center card-row">
              <div className="card-column">
                <div id="description">
                  <label class="form-label">Description</label>
                  <input
                    required
                    placeholder="Enter repair description"
                    type="text"
                    class="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="card-column">
                <div id="startDate">
                  <label class="form-label">Start Date</label>
                  <input
                    required
                    placeholder="Enter start date"
                    type="date"
                    class="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="card-column">
                <div id="endDate">
                  <label class="form-label">End Date</label>
                  <input
                    placeholder="Enter plate"
                    type="date"
                    class="form-control"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="card-column">
                <div id="price">
                  <label class="form-label">Price</label>
                  <input
                    placeholder="Enter price"
                    type="text"
                    class="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
