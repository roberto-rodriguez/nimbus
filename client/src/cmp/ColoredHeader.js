import React, { Component } from "react";
import { Logo } from "./";
import { RegisterNow } from "./";
import "./colored-header.style.scss";

class ColoredHeader extends Component {
  render() {
    return (
      <nav className="colored-header">
        <div className="row  ">
          <div className="col l8 offset-l2 m10 offset-m1 s12 in-line space-between padding-large">
            <Logo />

            <RegisterNow />
          </div>
        </div>
        <div className="row">
          <div className="col l8 offset-l2 m10 offset-m1 s12 mbl">
            <p className="colored-header__title padding-large">
              {this.props.title}
            </p>
          </div>
        </div>
      </nav>
    );
  }
}

export default ColoredHeader;
