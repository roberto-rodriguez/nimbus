import React, { Component } from "react";
import "./footer.style.scss";
import { Logo } from "./";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row">
          <div className="col m10 offset-m1 s12">
            <div className="col s12 m4 in-column ptxl">
              <Logo />
              <p>January 31 - February 3 · Las Vegas</p>
            </div>
            <div className="col s12 m4 in-column ptxl">
              <p style={{ fontSize: "2rem" }}>Connect with us</p>
              <br />
              <img
                style={{ height: 50, width: 280 }}
                src={require("../styles/images/madia-bar.png")}
              />
            </div>
            <div className="col s12 m4 in-column ptxl">
              <p style={{ fontSize: "2rem" }}>
                Subscribe to Summit 2020 updates
              </p>
              <br />
              <input
                type="text"
                style={{
                  border: "1px solid #00C7E5",
                  height: 40,
                  width: 240,
                  backgroundColor: "transparent",
                  float: "right"
                }}
              />
              <br />
              <div>
                <a className="signup">Sign Up</a>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <div className="row">
          <div className="col l8 offset-l2 m10 offset-m1 s12">
            <p style={{ color: "white", width: "100%", textAlign: "center" }}>
              Copyright © 2019 Nimbus &nbsp; &nbsp;&nbsp; &nbsp;
              <a href="">Privacy Policy</a>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <a href="">Terms of use</a>
              &nbsp; &nbsp;&nbsp; &nbsp;
              <a href="">Modern Slavery Act</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
