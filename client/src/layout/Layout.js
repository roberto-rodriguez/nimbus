import React, { Component } from "react";
import Banner from "./cmp/Banner";

class Layout extends Component {
  render() {
    var { children } = this.props;

    return (
      <div className="wrapper">
        <div className="spring">
          <Banner />
          <div className="belt" style={{ minHeight: "calc(100vh - 344px)" }}>
            {children}
          </div>
          <div
            id="footer-nav"
            style={{
              height: 237,
              backgroundImage: "linear-gradient(#212121, #363636)"
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Layout;
