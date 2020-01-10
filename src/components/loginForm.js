import React, { Component } from "react";
import Input from "./common/input";

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
          <Input
            name="username"
            label="UserName"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
