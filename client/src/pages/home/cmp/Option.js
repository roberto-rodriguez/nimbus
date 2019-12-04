import React, { Component } from "react";
import "./options.style.scss";
import { Link } from "react-router-dom";

class Option extends Component {
  render() {
    var { image, title, link } = this.props;
    return (
      <Link to={link}>
        <div className="option centered in-column">
          <img className="centered" src={image} style={{ width: "80%" }} />
          <br />
          <h2>{title}</h2>
        </div>
      </Link>
    );
  }
}

export default Option;
