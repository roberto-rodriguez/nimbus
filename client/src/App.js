import React from "react";
import "./styles/main.scss";
import { connect } from "react-redux";
import { HomePage, Keynotes, Sessions, Activities, Register } from "./pages/";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth, firestore } from "./actions/firebase.actions";
import * as authActions from "./actions/auth.actions";
class App extends React.Component {
  unsubscribeFromAuth = null;

  state = {
    currentUser: null
  };

  componentDidMount() {
    const { logIn, logOut } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authData => {
      if (authData) {
        const userRef = firestore.doc("/users/" + authData.uid);

        userRef.onSnapshot(snapshot => logIn(authData, { ...snapshot.data() }));
      } else {
        logOut();
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/keynotes" exact component={Keynotes} />
          <Route path="/sessions" exact component={Sessions} />
          <Route path="/activities" exact component={Activities} />
          <Route path="/register" exact component={Register} />
          <HomePage />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, authActions)(App);
