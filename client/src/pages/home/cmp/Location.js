import React, { Component } from "react";
import "./location.scss";

class Location extends Component {
  render() {
    return (
      <div className="location">
        <div className="row">
          <div className="col l8 offset-l2 m10 offset-m1 s12">
            <div className="col m6 s12">
              <img src={require("./images/location.jpg")} />
            </div>
            <div className="col m6 s12" style={{ padding: 20 }}>
              <h2> Mandalay Bay South Convention Center</h2>
              <p>3950 South Las Vegas Boulevard Las Vegas, Nevada 89119</p>

              <a href="https://goo.gl/maps/n5dZRw2xx5S2" target="_blank">
                Get directions ⟶
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
