import React, { Component } from "react";
import { Logo } from "./";
import { RegisterNow } from "./";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./colored-header.style.scss";

class ColoredHeader extends Component {
  render() {
    const { uid, firstName, lastName } = this.props;

    return (
      <nav className="colored-header">
        <div className="row  ">
          <div className="col l8 offset-l2 m10 offset-m1 s12 in-line space-between padding-large">
            <Logo />

            {uid ? (
              <div className="toggle-menu-wrapper">
                <p>{` ${firstName} ${lastName}`}</p>
                <ul style={{ width: 200 }}>
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li>
                    <span onClick={() => this.onLogout()}>Log Out</span>
                  </li>
                </ul>
              </div>
            ) : (
              <RegisterNow />
            )}
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

const mapStateToProps = ({ auth }) => ({
  uid: auth.uid,
  firstName: auth.firstName,
  lastName: auth.lastName,
  authLoaded: auth.authLoaded
});

export default connect(mapStateToProps)(ColoredHeader);
