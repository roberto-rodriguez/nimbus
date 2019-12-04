import React from "react";
import "./styles/main.scss";
import { HomePage, Keynotes, Sessions, Activities, Register } from "./pages/";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
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

export default App;
