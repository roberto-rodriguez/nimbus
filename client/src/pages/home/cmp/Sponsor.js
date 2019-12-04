import React, { Component } from "react";
import "./sponsor.scss";

class Sponsor extends Component {
  render() {
    return (
      <div className="sponsor">
        <div className="row">
          <div className="col l8 offset-l2 m10 offset-m1 s12">
            <div className="col m4 s12" style={{ padding: 20 }}>
              <h2> Become a Summit 2020 Sponsor </h2>
              <p>
                Sponsorship sales are now open!&nbsp;Spotlight your brand and
                solutions at the biggest event for teams, by teams with unique
                marketing opportunities to drive new leads.
              </p>
              <a href="/company/events/summit/sponsors"> Learn more  ⟶</a>
            </div>
            <div className="col m8 s12">
              <img src={require("./images/become_sponsor.jpg")} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsor;
