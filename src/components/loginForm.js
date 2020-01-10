import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("form is submitted");
    console.log("users details : ", this.state.account);
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account[e.target.name] = e.target.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div className="container login">
        <h1 className="">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group ">
            <label htmlFor="username">Username</label>
            <input
              value={account.username}
              name="username"
              onChange={this.handleChange}
              id="username"
              type="text"
              className="form-control"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              name="password"
              onChange={this.handleChange}
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
