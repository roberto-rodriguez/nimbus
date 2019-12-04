import React, { Component } from "react";
import { Logo } from "./";
import "./header.style.scss";
import { Link } from "react-router-dom";

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
                    href="/company/events/summit/attend"
                    className="imkt-navbar__link-list-link"
                  >
                    Attend
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
                {!this.props.hideRegister && (
                  <Link to="register" className="register-button">
                    Register now
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
