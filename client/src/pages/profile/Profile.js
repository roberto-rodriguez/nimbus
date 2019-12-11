import React, { Component } from "react";
import { Header, Footer } from "../../cmp";
import { Tabs, Account, Registrations } from "./cmp";
import "./profile.style.scss";

class Profile extends Component {
  state = {
    selectedTab: "account"
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="profile blue-bck">
        <Header />
        <Tabs
          selectedTab={this.state.selectedTab}
          onSelectTab={this.onSelectTab}
        />
        <div>{this.buildSection()}</div>
        <Footer />
      </div>
    );
  }

  onSelectTab = selectedTab => this.setState({ selectedTab });

  buildSection = () => {
    const { selectedTab } = this.state;

    switch (selectedTab) {
      case "account":
        return <Account />;
      case "registrations":
        return <Registrations />;
      default:
        return null;
    }
  };
}

export default Profile;
