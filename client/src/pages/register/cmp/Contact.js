import React, { Component } from "react";
import { TextField } from "../../../cmp/";

const fields = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "email", label: "Email Address" },
  { name: "phone", label: "Phone Number" },
  { name: "businessName", label: "Company Name" }
];

const login = [
  { name: "username", label: "User Name" },
  { name: "password", label: "Password", type: "password" },
  { name: "repassword", label: "Retype password", type: "password" }
];

class Contact extends Component {
  render() {
    const { onNext, onChange, data } = this.props;

    return (
      <div>
        <div className="row ptl pbl mb0">
          <div className="col l8 offset-l2 s10 offset-s1 ">
            <div className="epic-title-container pbl">
              <div className="epic-title">
                <p>Contact Information</p>
              </div>
              <hr />
            </div>
            {fields.map(({ name, label }, i) => (
              <TextField
                name={name}
                label={label}
                key={i}
                onChange={onChange}
                value={data[name]}
              />
            ))}
            <br />
            <br />
            <div className="epic-title-container pbl">
              <div className="epic-title">
                <p>Create Account Login</p>
              </div>
              <hr />
            </div>
            {login.map(({ name, label, type }, i) => (
              <TextField
                name={name}
                label={label}
                key={i}
                onChange={onChange}
                value={data[name]}
                type={type}
              />
            ))}
          </div>
        </div>
        <div className="row ptl pbl mb0">
          <div className="col l8 offset-l2 s10 offset-s1 ">
            <div className="col s6 offset-s6">
              <button className="btn-standard float-left" onClick={onNext}>
                <span>Next →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
