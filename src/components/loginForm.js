import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      email: "",
      rating: "",
      comments: ""
    },
    errors: { username: "", email: "", rating: "", comments: "" }
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    email: Joi.string()
      .required()
      .label("Email-ID"),
    rating: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Rating"),
    comments: Joi.string()
      .required()
      .label("Comments")
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log("form is submitted");

    const errors = this.validate();
    //console.log("errors: ", errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

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
        <h1 className="">Customer-Feedback-Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="UserName"
            value={account.username}
            onChange={this.handleChange}
            errors={errors.username}
          />
          <Input
            name="email"
            label="Email-ID"
            value={account.email}
            onChange={this.handleChange}
            errors={errors.email}
          />
          <Input
            name="rating"
            label="Rating"
            value={account.rating}
            onChange={this.handleChange}
            errors={errors.rating}
          />
          <Input
            name="comments"
            label="Comments"
            value={account.comments}
            onChange={this.handleChange}
            errors={errors.comments}
          />

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
