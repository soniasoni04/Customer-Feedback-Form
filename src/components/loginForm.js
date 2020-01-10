import React, { Component } from "react";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div className="container login">
        <h1 className="">Login</h1>
        <form>
          <div className="form-group ">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="form-control"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              autoFocus
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
