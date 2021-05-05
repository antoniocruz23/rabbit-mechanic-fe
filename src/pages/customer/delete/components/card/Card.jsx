import { useParams } from "react-router-dom";
import AuthService from "../../../../../services/auth";
import { Link } from "react-router-dom";

import "../../../../styles/DeleteCard.css";

const Card = () => {
  const { id } = useParams();

  const onSubmit = async (e) => {
    e.preventDefault();

    AuthService.deleteCustomer(id).then(
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
          <h5 class="card-title">Delete Customer</h5>
          <div className="text-container">
            <label class="warning-text">
              Do you really want to delete "customer name"
            </label>
          </div>

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
