import React, { Component } from "react";
import "./logo.style.scss";

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <p className="logo__top">Nimbus</p>
        <p className="logo__middle">SUMMIT 2020</p>
      </div>
    );
  }
}

export default Logo;
