import React, { Component } from "react";
import "./logo.style.scss";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    return (
      <Link to="/">
        <div className="logo">
          <p className="logo__top">Nimbus</p>
          <p className="logo__middle">SUMMIT 2020</p>
        </div>
      </Link>
    );
  }
}

export default Logo;
