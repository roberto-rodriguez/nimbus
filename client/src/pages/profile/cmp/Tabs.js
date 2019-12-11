import React, { Component } from "react";

const steps = [
  { name: "account", title: "Account" },
  { name: "registrations", title: "Registrations" }
];

class Tabs extends Component {
  render() {
    const { selectedTab, onSelectTab } = this.props;

    return (
      <div className="row tabs ptl pbl mb0">
        <div className="col s10 offset-s1 in-column">
          <div className="epic-title-container pbl">
            <div className="epic-title">
              <p>Profile</p>
            </div>
            <hr />
          </div>
          <ul>
            {steps.map(({ name, title }, i) => (
              <li
                className={`float-left ${
                  selectedTab === name ? "step-selected" : ""
                }`}
                key={i}
                onClick={() => onSelectTab(name)}
              >
                <div>
                  <span className="title">{title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Tabs;
