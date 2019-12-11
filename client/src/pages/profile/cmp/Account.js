import React, { Component } from "react";
import { TextField } from "../../../cmp";
import * as authActions from "../../../actions/auth.actions";
import { connect } from "react-redux";

const fields = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "email", label: "Email" },
  { name: "phone", label: "Phone Number" },
  { name: "companyName", label: "Company Name" }
];

class Account extends Component {
  render() {
    const formData = this.props.authData;

    return (
      <div>
        <div className="row ptl mb0">
          <div className="col l8 offset-l2 s10 offset-s1 ">
            {fields.map(({ name, label }, i) => (
              <TextField
                name={name}
                label={label}
                key={i}
                value={formData[name] || ""}
                readOnly={true}
              />
            ))}
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ authData: auth });

export default connect(mapStateToProps, authActions)(Account);
