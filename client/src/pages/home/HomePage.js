import React, { Component } from "react";
import { Header, Footer } from "../../cmp/";
import {
  SubHero,
  Hero,
  Options,
  Karousel,
  Sponsor,
  Location,
  JoinUs
} from "./cmp/";

class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Hero />
        <SubHero />
        <div className="blue-bck">
          <Options />
          <Karousel />
          <Sponsor />
          <Location />
          <JoinUs />
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
