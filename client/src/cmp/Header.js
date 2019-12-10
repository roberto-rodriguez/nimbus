import React, { Component } from "react";
import { Logo } from "./";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Header extends Component {
  render() {
    return (
      <nav className="imkt-navbar">
        <div className="imkt-navbar__main-section">
          <div className="row">
            <div className="column nav-comp-column">
              <Logo />

              <ul className="imkt-navbar__link-list hide-on-small-and-down">
                <li>
                  {" "}
                  <a
                    href="/company/events/summit/about"
                    className="imkt-navbar__link-list-link"
                  >
                    About
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/company/events/summit/schedule"
                    className="imkt-navbar__link-list-link"
                  >
                    Schedule
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="/company/events/summit/sponsors"
                    className="imkt-navbar__link-list-link"
                  >
                    Sponsors
                  </a>{" "}
                </li>
              </ul>

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
        <p className="prl mrl" style={{ fontSize: "1.9rem" }}>
          Welcome{" "}
          <span style={{ color: "#00C7E5" }}>
            {" "}
            {` ${firstName} ${lastName}`}
          </span>
        </p>
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

export default connect(mapStateToProps)(Header);
