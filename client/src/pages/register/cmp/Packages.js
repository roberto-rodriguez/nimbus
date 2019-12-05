import React, { Component } from "react";

const packages = [
  {
    save: "SAVE $650 PER PASS NOW",
    title: "Summit All-Access Pass",
    price: 750,
    standard: "Standard Rate: $1,400 per pass",
    desc:
      "One (1) All-Access pass provides access to three days of content including General Sessions, Product Keynotes, breakout sessions, Bash, swag, Expo Hall and more!"
  },
  {
    save: "SAVE $500 PER PASS NOW",
    title: "Summit All-Access Pass Small Team Bundle",
    price: 500,
    standard: "Standard Rate: $1,000 per pass",
    desc:
      "Register 5-9 attendees and receive an additional $250 off each All-Access pass.*"
  },
  {
    save: "SAVE $475 PER PASS NOW",
    title: "Summit All-Access Pass Large Team Bundle",
    price: 475,
    standard: "Standard Rate: $950 per pass",
    desc:
      "Register at least 10 attendees and receive an additional $275 off each All-Access Pass.*"
  },
  {
    save: "SAVE $325 PER PASS NOW",
    title: "Teams & Practices Day Pass",
    price: 375,
    standard: "Standard Rate: $700 per pass",
    desc:
      "One Day Pass provides access to General Session, Product Keynotes, breakout sessions, Bash, and Expo Hall on Thursday, April 2 only."
  }
];

class Packages extends Component {
  render() {
    const { onNext, onBack, onChange, data } = this.props;
    var pck = data.package;

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
        {pck && (
          <div className="row package-summary pbl">
            <div className="col s10 offset-s1 in-column">
              <div className="col s12 m6">
                <p className="package-summary__title">Summary</p>

                <div className="row mb0 pts">
                  <div className="col s4">Selection:</div>
                  <div className="col s8" style={{ fontStyle: "italic" }}>
                    {pck.title}
                  </div>
                </div>
                <div className="row mb0 pts">
                  <div className="col s4">Price:</div>
                  <div className="col s8" style={{ fontStyle: "italic" }}>
                    <b style={{ color: "#c0b6f2" }}>${pck.price}</b> per pass
                  </div>
                </div>
                <div className="row mb0 pts mbm">
                  <div className="col s4">Number of passes:</div>
                  <div className="col s8" style={{ fontStyle: "italic" }}>
                    <input
                      type="text"
                      onChange={e => onChange("passes", e.target.value)}
                      value={data["passes"]}
                    />
                  </div>
                </div>
                <div className="row mb0 pts">
                  <div className="col s4" style={{ fontSize: "2rem" }}>
                    Total:
                  </div>
                  <div className="col s8" style={{ fontStyle: "italic" }}>
                    <b style={{ color: "#c0b6f2" }}>
                      ${pck.price * data["passes"]}
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row ptl pbl mb0">
          <div className="col s6">
            <button class="btn-standard float-right" onClick={onBack}>
              <span>← Back</span>
            </button>
          </div>
          <div className="col s6">
            {pck && (
              <button class="btn-standard float-left" onClick={onNext}>
                <span>Next →</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  buildPackage = ({ save, title, price, standard, desc }, i) => (
    <div className="col s12 m3 padding-medium" key={i}>
      <div
        className={`padding-medium package ${
          this.props.data &&
          this.props.data.package &&
          this.props.data.package.price === price
            ? "package_selected"
            : ""
        }`}
        onClick={() => this.props.onChange("package", { title, price })}
        style={{ border: "1px solid #00C7E6" }}
      >
        <p className="save">{save}</p>
        <br />
        <p className="title">{title}</p>
        <br />
        <p className="earlyBird">
          {"Early Bird rate: "}
          <b style={{ color: "#c0b6f2" }}>${price}</b>
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
