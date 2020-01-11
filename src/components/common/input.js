import React from "react";

const Input = ({ name, label, value, errors, onChange }) => {
  return (
    <div className="form-group ">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        id={name}
        type="text"
        className="form-control"
        autoFocus
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
