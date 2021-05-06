import { useState } from "react";
import AuthService from "../../../../../services/Vehicle";

import "../../../../styles/Card.css";

const Card = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    AuthService.updateVehicle(
      id,
      name,
      description,
      startDate,
      endDate,
      price
    ).then(
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
          <h5 class="card-title">Update Repair Information</h5>
          <div className="card-row">
            <div className="card-column">
              <div id="id">
                <label class="form-label">Id</label>
                <input
                  required=""
                  placeholder="Enter repair id to update"
                  type="text"
                  class="form-control"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="card-column">
              <div id="name">
                <label class="form-label">Name</label>
                <input
                  required=""
                  placeholder="Enter name"
                  type="text"
                  class="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="card-column">
              <div id="description">
                <label class="form-label">Description</label>
                <input
                  required=""
                  placeholder="Enter description"
                  type="text"
                  class="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="card-row">
              <div className="card-column">
                <div id="startDate">
                  <label class="form-label">Start Date</label>
                  <input
                    required=""
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
                    required=""
                    placeholder="Enter end date"
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
                    required=""
                    placeholder="Enter price"
                    type="text"
                    class="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
