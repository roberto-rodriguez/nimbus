import React, { Component } from "react";
import { TextField, Header, Footer } from "../../cmp";
import { auth, signInWithGoogle } from "../../actions/firebase.actions";
import * as authActions from "../../actions/auth.actions";
import { withRouter } from "react-router";
import { connect } from "react-redux";

const login = [
  { name: "email", label: "Email Address" },
  { name: "password", label: "Password", type: "password" }
];

const signupGoogleImg = require("./images/login-with-google.png");

class Login extends Component {
  unsubscribeFromAuth = null;

  state = {};

  onChange = (name, value) => this.setState({ [name]: value });

  componentDidMount() {
    const { history } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authData => {
      authData && history.push("/");
    });

    this.setState({}); //Avoid the issue where the form is auto-populated on load
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth && this.unsubscribeFromAuth();
  }

  login = async () => {
    const { email, password } = this.state;

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    var { authData } = this.props;
    return (
      <div className="login blue-bck">
        <Header />
        <div className="row ptl mb0">
          <div className="col l8 offset-l2 s10 offset-s1 ">
            <div className="epic-title-container pbl">
              <div className="epic-title">
                <p>Login</p>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="row mb0">
          <div className="col s10 offset-s1 m6">
            {login.map(({ name, label, type }, i) => (
              <TextField
                name={name}
                label={label}
                key={i}
                onChange={this.onChange}
                type={type}
                labelClass="m6"
              />
            ))}

            <div className="centered ptm pbxl">
              <button
                className="btn-standard float-left cursor-pointer"
                onClick={() => this.login()}
              >
                <span>Login</span>
              </button>
            </div>
          </div>
          <div
            className="col s12 m6 centered"
            style={{ height: 222, alignItems: "flex-start" }}
          >
            <div className="in-line centered">
              — &nbsp;&nbsp; OR &nbsp;&nbsp;—
              <img
                src={signupGoogleImg}
                style={{
                  width: 250,
                  maxWidth: "100%",
                  cursor: "pointer",
                  marginLeft: 15
                }}
                onClick={signInWithGoogle}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ authentication: auth });

export default connect(mapStateToProps, authActions)(withRouter(Login));
