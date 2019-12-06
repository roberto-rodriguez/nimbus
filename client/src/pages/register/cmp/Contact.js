import React, { Component } from "react";
import { TextField } from "../../../cmp/";

const fields = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },

  { name: "phone", label: "Phone Number" },
  { name: "businessName", label: "Company Name" }
];

const login = [
  { name: "email", label: "Email Address" },
  { name: "password", label: "Password", type: "password" },
  { name: "repassword", label: "Retype password", type: "password" }
];

const signupGoogle = require("../images/signup-google.png");

class Contact extends Component {
  render() {
    const { onNext, onChange, data } = this.props;

    return (
      <div>
        <div className="row ptl mb0">
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
          </div>
        </div>
        <div className="row">
          <div className="col s10 offset-s1 m6">
            {login.map(({ name, label, type }, i) => (
              <TextField
                name={name}
                label={label}
                key={i}
                onChange={onChange}
                value={data[name]}
                type={type}
                labelClass="m6"
              />
            ))}
          </div>
          <div
            className="col s12 m6 centered in-column"
            style={{ height: 222 }}
          >
            <div className="in-line centered">
              — &nbsp;&nbsp; OR &nbsp;&nbsp;—
              <img
                src={signupGoogle}
                style={{ width: 250, maxWidth: "100%" }}
              />
            </div>
            <p>
              Already have an account?{"   "}
              <a
                href=""
                style={{
                  color: "white",
                  borderBottom: "2px solid rgb(0, 168, 208)",
                  textDecoration: "none",
                  fontWeight: "bold",
                  marginLeft: 10
                }}
              >
                Sign In
              </a>
            </p>
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
