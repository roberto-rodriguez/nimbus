import React, { Component } from "react";
import "./subhero.style.scss";
import { NavLink } from "react-router-dom";
class SubHero extends Component {
  render() {
    return (
      <div className="row sub-hero">
        <div className="col l8 offset-l2 m10 offset-m1 s12">
          <div className="col s12 m4">
            <h4 style={{ textAlign: "right", paddingRight: "2rem" }}>
              Registration is open!
            </h4>
          </div>
          <div className="col s12 m8">
            <p>
              Join us at the ultimate event for teams, by teams and explore
              innovative ways to work. Save $650 on your pass. Offer ends
              January 15. <br />
              <NavLink to="/register" className="link-arrow">
                Register now ⟶
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SubHero;
