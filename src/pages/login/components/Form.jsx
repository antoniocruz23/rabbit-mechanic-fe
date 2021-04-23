import React from "react";

import "./Form.css";

const Form = () => {
  
  return (     
    <form>
      <h3>Log in</h3>

      <div className="form-group">
        <label>Username</label>
        <input type="text" className="form-control" placeholder="Enter username" />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
    </form>

  );
}

export default Form;
