import React, { Component } from "react";

const steps = [
  { number: 1, title: "Contact Information" },
  { number: 2, title: "Registration Packages" },
  { number: 3, title: "Payment Details" },
  { number: 4, title: "Confirmation" }
];

class Steps extends Component {
  render() {
    const { page } = this.props;

    return (
      <div className="row steps ptl pbl mb0">
        <div className="col l8 offset-l2 s10 offset-s1 ">
          <ul className="steps w100">
            {steps.map(({ number, title }, i) => (
              <li key={i}>
                <div className={"step " + (number === page ? "step-selected" : "")}>
                  <span
                    className={"number"}
                  >
                    {number}
                  </span>
                  <span className="desc">{title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Steps;
