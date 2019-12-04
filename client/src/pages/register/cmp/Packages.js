import React, { Component } from "react";
import { TextField } from "../../../cmp";

const packages = [
  {
    save: "SAVE $650 PER PASS NOW",
    title: "Summit All-Access Pass",
    earlyBird: "$750",
    standard: "Standard Rate: $1,400 per pass",
    desc:
      "One (1) All-Access pass provides access to three days of content including General Sessions, Product Keynotes, breakout sessions, Bash, swag, Expo Hall and more!"
  },
  {
    save: "SAVE $500 PER PASS NOW",
    title: "Summit All-Access Pass Small Team Bundle",
    earlyBird: "$500",
    standard: "Standard Rate: $1,000 per pass",
    desc:
      "Register 5-9 attendees and receive an additional $250 off each All-Access pass.*"
  },
  {
    save: "SAVE $475 PER PASS NOW",
    title: "Summit All-Access Pass Large Team Bundle",
    earlyBird: "$475",
    standard: "Standard Rate: $950 per pass",
    desc:
      "Register at least 10 attendees and receive an additional $275 off each All-Access Pass.*"
  },
  {
    save: "SAVE $325 PER PASS NOW",
    title: "Teams & Practices Day Pass",
    earlyBird: "$375",
    standard: "Standard Rate: $700 per pass",
    desc:
      "One Day Pass provides access to General Session, Product Keynotes, breakout sessions, Bash, and Expo Hall on Thursday, April 2 only."
  }
];

class Packages extends Component {
  render() {
    return (
      <div>
        <div className="row ptl pbm mb0">
          <div className="col s10 offset-s1 ">
            <div className="epic-title-container pbl">
              <div className="epic-title">
                <p>Select Registration Package</p>
              </div>
              <hr />
            </div>
            {packages.map(this.buildPackage)}
            <br />
          </div>
        </div>
        <div className="row package-summary pbl">
          <div className="col s10 offset-s1 in-column">
            <div className="col s12 m6">
              <p className="package-summary__title">Summary</p>

              <div className="row mb0 pts">
                <div className="col s4">Selection:</div>
                <div className="col s8" style={{ fontStyle: "italic" }}>
                  Summit All-Access Pass Large Team Bundle
                </div>
              </div>
              <div className="row mb0 pts">
                <div className="col s4">Price:</div>
                <div className="col s8" style={{ fontStyle: "italic" }}>
                  <b style={{ color: "#c0b6f2" }}>$475</b> per pass
                </div>
              </div>
              <div className="row mb0 pts mbm">
                <div className="col s4">Number of passes:</div>
                <div className="col s8" style={{ fontStyle: "italic" }}>
                  <input type="text" value="1" />
                </div>
              </div>
              <div className="row mb0 pts">
                <div className="col s4" style={{ fontSize: "2rem" }}>
                  Total:
                </div>
                <div className="col s8" style={{ fontStyle: "italic" }}>
                  <b style={{ color: "#c0b6f2" }}>$475</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ptl pbl mb0">
          <div className="col s6">
            <button class="btn-standard float-right">
              <span>← Back</span>
            </button>
          </div>
          <div className="col s6">
            <button class="btn-standard float-left">
              <span>Next →</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  buildPackage = ({ save, title, earlyBird, standard, desc }, i) => (
    <div className="col s12 m3 padding-medium" key={i}>
      <div
        className="padding-medium package"
        style={{ border: "1px solid #00C7E6" }}
      >
        <p className="save">{save}</p>
        <br />
        <p className="title">{title}</p>
        <br />
        <p className="earlyBird">
          {"Early Bird rate: "}
          <b style={{ color: "#c0b6f2" }}>{earlyBird}</b>
          {" per pass"}
        </p>
        <br />
        <br />

        <p className="package-desc">{desc}</p>

        <br />
        <p className="package-standard">{standard}</p>
      </div>
    </div>
  );
}

export default Packages;
