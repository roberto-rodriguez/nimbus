import React, { Component } from "react";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header role="banner">
        <nav role="navigation">
          <div className="belt belt-alt">
            <div className="mod-js mod-nav">
              <div className="rhombus"></div>

              <a
                className="logo"
                href="https://www.vodafone.ie/index.jsp?ts=1387358010618"
              >
                <img
                  src={require("../../styles/images/vf-logo.png")}
                  alt="Vodafone"
                />
              </a>

              <ul className="nav-mobile row">
                <li>
                  <a href="#" data-target="#nav-menu" className="nav-trigger">
                    <i className="i-menu"></i>
                    <span className="access">Menu</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://n.vodafone.ie/en.html"
                    data-target="#nav-search"
                  >
                    <i className="i-search-mbl-lrg"></i>
                    <span className="access">Search</span>
                  </a>
                </li>
                <li className="basket">
                  <a href="https://shop.vodafone.ie/shop/checkout/cart.jsp">
                    {" "}
                    <i className="i-basket-mbl-lrg"></i>{" "}
                    <span className="access">Basket</span>{" "}
                  </a>{" "}
                </li>
              </ul>

              <div className="nav-aux">
                <ul>
                  <li>
                    <a href="https://www.vodafone.ie/business/home/">
                      <i className="i-business-sites"></i>Business site
                    </a>
                  </li>
                  <li className="basket">
                    <a href="https://shop.vodafone.ie/shop/checkout/cart.jsp">
                      <i className="i-basket-sml"></i>Basket
                    </a>
                  </li>
                </ul>
              </div>

              <div className="nav-base">
                <div
                  className="nav-primary grid nav-primary-wide"
                  style={{ height: 45 }}
                ></div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Banner;
