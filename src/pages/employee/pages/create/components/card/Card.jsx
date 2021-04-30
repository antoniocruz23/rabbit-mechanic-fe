import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="card-body">
        <form class="card-form">
          <h5 class="card-title">Employee Information</h5>
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
            <div className="align-items-center card-row">
              <div className="card-column">
                <div id="username">
                  <label class="form-label">Username</label>
                  <input
                    required=""
                    placeholder="Enter username"
                    type="text"
                    class="form-control"
                  ></input>
                </div>
              </div>
              <div className="card-column">
                <div id="password">
                  <label class="form-label">Password</label>
                  <input
                    required=""
                    placeholder="Enter password"
                    type="password"
                    class="form-control"
                  ></input>
                </div>
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
