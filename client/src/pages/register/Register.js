import React, { Component } from "react";
import { Header, Footer } from "../../cmp";
import { Steps, Contact, Packages, Payment } from "./cmp";
import "./register.style.scss";

class Register extends Component {
  render() {
    return (
      <div className="register">
        <Header hideRegister={true} />
        <Steps />
        <div className="blue-bck pts">
          <Payment />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;
