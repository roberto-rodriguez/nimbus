import React, { Component } from "react";

import "./registrationOpen.style.scss";
import { RegisterNow } from "./";
class RegistrationOpen extends Component {
  render() {
    return (
      <nav className="registration-open">
        <div className="centered in-column">
          <p className="colored-header__title ptl">
            Registration <span>now open</span>
          </p>
          <br />
          <RegisterNow />
        </div>
      </nav>
    );
  }
}

export default RegistrationOpen;
