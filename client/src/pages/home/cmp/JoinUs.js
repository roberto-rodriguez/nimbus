import React, { Component } from "react";
import "./joinus.style.scss";
import { Link } from "react-router-dom";
class JoinUs extends Component {
  render() {
    return (
      <div className="row joinus">
        <div className="col l8  offset-l2 m10  offset-m1 s12 h100 white-bck centered joinus__inner p0">
          <div className="col s6 joinus__left h100 centered in-column">
            <h1>Join Us</h1>
            <Link to="/register">REGISTER NOW</Link>
          </div>
          <div className="col s6" style={{ padding: "7px 0px 0px 0px" }}>
            <img src={require("./images/joinus.png")} />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default JoinUs;
