import React, { Component } from "react";

import "./register-now.style.scss";
import { Link } from "react-router-dom";
class RegisterNow extends Component {
  render() {
    return (
      <Link to="/register" class="register-now">
        Register Now
      </Link>
    );
  }
}

export default RegisterNow;
