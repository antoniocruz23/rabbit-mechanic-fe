import { useState } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../../../services/Auth";

import "./Form.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    AuthService.login(username, password).then(() => {
      if (AuthService.loggedIn() === true) {
        setRedirect(true);
      }
    });
  };

  if (redirect) return <Redirect to="/home" />;

  return (
    <form className="form-login" onSubmit={onSubmit}>
      <h3>Log in</h3>

      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Sign in
      </button>
    </form>
  );
};

export default Form;
