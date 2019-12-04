import React, { Component } from "react";
import { TextField } from "../../../cmp/";

const fields = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "businessName", label: "Business Name" },
  { name: "email", label: "Email Address" }
];

const login = [
  { name: "username", label: "User Name" },
  { name: "password", label: "Password" },
  { name: "repassword", label: "Retype password" }
];

class Contact extends Component {
  render() {
    const { image, title, date, time, location, text } = this.props;

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
              <TextField name={name} label={label} key={i} />
            ))}
            <br />
            <br />
            <div className="epic-title-container pbl">
              <div className="epic-title">
                <p>Create Account Login</p>
              </div>
              <hr />
            </div>
            {login.map(({ name, label }, i) => (
              <TextField name={name} label={label} key={i} />
            ))}
          </div>
        </div>
        <div className="row ptl pbl mb0">
          <div className="col l8 offset-l2 s10 offset-s1 ">
            <button class="btn-standard float-right">
              <span>Next →</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
