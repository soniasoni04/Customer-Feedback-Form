import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: { username: "", password: "" }
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("form is submitted");

    const errors = this.validate();
    console.log("errors: ", errors);
    this.setState({ errors });

    console.log("users details : ", this.state.account);
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account[e.target.name] = e.target.value;
    this.setState({ account });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div className="container login">
        <h1 className="">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="UserName"
            value={account.username}
            onChange={this.handleChange}
            errors={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            errors={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
