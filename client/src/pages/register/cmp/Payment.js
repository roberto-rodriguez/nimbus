import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as registrationActions from "../../../actions/registration.actions";

const stripeImg = require("../images/powered-stripe.png");
const stripeKey = process.env.REACT_APP_STRIPE_KEY;
class Payment extends Component {
  onToken = async token => {
    const { onNext, data, saveRegistration } = this.props;

    saveRegistration(
      {
        ...data,
        paymentToken: token.id
      },
      onNext
    );
  };

  render() {
    const { onBack, data } = this.props;
    const pck = data.package;
    var total = data.passes * pck.price;

    var k = stripeKey;
    debugger;

    return (
      <div>
        <div className="row ptl pbm mb0">
          <div className="col s10 offset-s1 ">
            <div className="epic-title-container pbl">
              <div className="epic-title">
                <p>Payment Details</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="row package-summary pbl">
          <div className="col s10 offset-s1 offset-m2">
            <div className="col s12 m6 in-column">
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
                  <b>{data.passes}</b>
                </div>
              </div>
              <div className="row mb0 pts">
                <div className="col s4" style={{ fontSize: "2rem" }}>
                  Total:
                </div>
                <div className="col s8" style={{ fontStyle: "italic" }}>
                  <b style={{ color: "#c0b6f2" }}>${total}</b>
                </div>
              </div>
              <br />
              <br />
              <div className="centered in-column">
                <StripeCheckout
                  name="Nimbus"
                  description="Summit 2020"
                  image="http://www.vodafone.ie/images/vf-logo.png"
                  panelLabel="Make Payment"
                  amount={total * 100}
                  currency="USD"
                  stripeKey={stripeKey}
                  billingAddress={true}
                  allowRememberMe
                  token={this.onToken}
                >
                  <button className="pay-btn">Make a Payment</button>
                </StripeCheckout>

                <br />
                <img src={stripeImg} />
              </div>
            </div>
            <div className="col s12 m6"></div>
          </div>
        </div>
        <div className="row ptl pbl mb0">
          <div className="col s6 offset-s1 offset-m2">
            <button class="btn-standard float-left" onClick={onBack}>
              <span>← Back</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, registrationActions)(Payment);
