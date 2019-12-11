import React, { Component } from "react";
import { TextField } from "../../../cmp";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../../actions/firebase.actions";
import * as authActions from "../../../actions/auth.actions";
import { connect } from "react-redux";

const fields = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },

  { name: "phone", label: "Phone Number" },
  { name: "companyName", label: "Company Name" }
];

const login = [
  { name: "email", label: "Email Address" },
  { name: "password", label: "Password", type: "password" },
  { name: "repassword", label: "Retype password", type: "password" }
];

const signupGoogleImg = require("../images/signup-google.png");

class AccountCreation extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { onNext } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authData => {
      this.props.signUp(authData, this.props.data, this.afterSignUp);

      authData && onNext();
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  createAccount = async () => {
    const { data, onNext } = this.props;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
    } catch (error) {
      alert(error.message);
    }
  };

  onSignUpWithGoogle = async () => {
    try {
      signInWithGoogle();
    } catch (error) {
      alert(error.message);
    }
  };

  afterSignUp = () => {};

  render() {
    const { onChange, data, onNext, authData } = this.props;

    var formData = authData.uid ? authData : data;

    return (
      <div>
        <div className="row ptl mb0">
          <div className="col l8 offset-l2 s10 offset-s1 ">
            {!authData.uid && (
              <p className="already-have-account">
                Already have an account?{"   "}
                <span
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  <Link to="/login">Sign In</Link>
                </span>
              </p>
            )}

            <div className="epic-title-container pbl">
              <div className="epic-title">
                <p>Create Account</p>
              </div>
              <hr />
            </div>
            {fields.map(({ name, label }, i) => (
              <TextField
                name={name}
                label={label}
                key={i}
                onChange={onChange}
                value={formData[name] || ""}
                readOnly={!!authData.uid}
              />
            ))}
            <br />
            <br />
            {!authData.uid && (
              <div className="epic-title-container pbl">
                <div className="epic-title">
                  <p>Account Login</p>
                </div>
                <hr />
              </div>
            )}
          </div>
        </div>

        {!authData.uid && (
          <div className="row">
            <div className="col s10 offset-s1 m6">
              {login.map(({ name, label, type }, i) => (
                <TextField
                  name={name}
                  label={label}
                  key={i}
                  onChange={onChange}
                  value={data[name] || ""}
                  type={type}
                  labelClass="m6"
                />
              ))}
            </div>
            <div className="col s12 m6 centered" style={{ height: 222 }}>
              <div className="in-line centered">
                — &nbsp;&nbsp; OR &nbsp;&nbsp;—
                <img
                  src={signupGoogleImg}
                  style={{ width: 250, maxWidth: "100%", cursor: "pointer" }}
                  onClick={() => this.onSignUpWithGoogle()}
                />
              </div>
            </div>
          </div>
        )}
        <div className="row ptl pbl mb0">
          <div className="col l8 offset-l2 s10 offset-s1 ">
            <div className="col s6">
              {!authData.uid && (
                <button
                  className="btn-standard float-right"
                  onClick={() => this.createAccount()}
                >
                  <span>Create Account</span>
                </button>
              )}
            </div>
            <div className="col s6">
              {authData.uid && (
                <button className="btn-standard float-left" onClick={onNext}>
                  <span>Next →</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ authData: auth });

export default connect(mapStateToProps, authActions)(AccountCreation);
