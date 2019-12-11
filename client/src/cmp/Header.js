import React, { Component } from "react";
import { Logo } from "./";
import "./header.style.scss";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../actions/firebase.actions";
class Header extends Component {
  onLogout = () => {
    const { history } = this.props;

    auth.signOut();
    if (history.location.pathname != "/") {
      history.push("/");
    }
  };

  render() {
    return (
      <nav className="imkt-navbar">
        <div className="imkt-navbar__main-section">
          <div className="row">
            <div className="column nav-comp-column">
              <Logo />

              <div className="imkt-navbar__right-nav">
                {this.buildAuthButton()}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  buildAuthButton = () => {
    const { hideRegister, uid, firstName, lastName, authLoaded } = this.props;

    if (!authLoaded) return null;

    if (uid) {
      return (
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
      );
    } else {
      if (!hideRegister) {
        return (
          <Link to="register" className="register-button">
            Register now
          </Link>
        );
      }
    }
  };
}

const mapStateToProps = ({ auth }) => ({
  uid: auth.uid,
  firstName: auth.firstName,
  lastName: auth.lastName,
  authLoaded: auth.authLoaded
});

export default connect(mapStateToProps)(withRouter(Header));
