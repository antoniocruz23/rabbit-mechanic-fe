import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="card-body">
        <form class="card-form">
          <h5 class="card-title">Delete Employee</h5>
          <div className="text-container">
            <label class="warning-text">
              Do you really want to delete "employee name"
            </label>
          </div>

          <div className="button-container">
            <button type="submit" class="btn btn-delete">
              Delete
            </button>
            <button type="submit" class="btn btn-cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Card;
