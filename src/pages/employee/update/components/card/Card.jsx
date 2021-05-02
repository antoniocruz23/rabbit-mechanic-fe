import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="card-body">
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
