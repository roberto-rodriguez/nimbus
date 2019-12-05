import React, { Component } from "react";
import { Link } from "react-router-dom";

class Confirmation extends Component {
  render() {
    var { data } = this.props;

    var pck = data.package;

    return (
      <div>
        <div className="row ptl pbm mb0">
          <div className="col s10 offset-s1 ">
            <div className="epic-title-container pbl">
              <div className="epic-title centered">
                <p>Order Completed Successfully</p>
              </div>
              <div className="epic-title centered">
                <p style={{ fontSize: "2rem", color: "rgb(0, 199, 229)" }}>
                  An email was sent to you with the order details
                </p>
              </div>
            </div>

            <br />
          </div>
        </div>
        {pck && (
          <div className="row package-summary pbl">
            <div className="col s10 offset-s1 m4 offset-m4 in-column">
              <div className="centered in-column">
                <p className="package-summary__title w100">Order Summary</p>

                <div className="row mb0 pts w100">
                  <div className="col s6 text-right">Selection:</div>
                  <div className="col s6 text-left">
                    <b style={{ fontStyle: "italic", color: "#c0b6f2" }}>
                      {pck.title}
                    </b>
                  </div>
                </div>
                <div className="row mb0 pts w100">
                  <div className="col s6 text-right">Price:</div>
                  <div
                    className="col s6 text-left"
                    style={{ fontStyle: "italic" }}
                  >
                    <b style={{ color: "#c0b6f2" }}>${pck.price} per pass</b>
                  </div>
                </div>
                <div className="row mb0 pts mbm w100">
                  <div className="col s6 text-right">Number of passes:</div>
                  <div
                    className="col s6 text-left"
                    style={{ fontStyle: "italic" }}
                  >
                    <b style={{ color: "#c0b6f2" }}> {data["passes"]}</b>
                  </div>
                </div>
                <div className="row mb0   w100">
                  <div className="col s6 text-right">Total:</div>
                  <div
                    className="col s6 text-left"
                    style={{ fontStyle: "italic" }}
                  >
                    <b style={{ color: "#c0b6f2" }}>
                      ${pck.price * data["passes"]}
                    </b>
                  </div>
                </div>
                <div className="row mb0 pts w100">
                  <div className="col s6 text-right">Confirmation Number:</div>
                  <div
                    className="col s6 text-left"
                    style={{ fontStyle: "italic" }}
                  >
                    <b style={{ color: "rgb(0, 199, 229)" }}>XWA435</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row ptl pbl mb0 centered cursor-pointer">
          <Link to="/">
            <button class="btn-standard" onClick={() => {}}>
              <span>← Return to Site</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Confirmation;
