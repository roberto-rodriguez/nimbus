import React, { Component } from "react";
import "./options.style.scss";
import { Option } from "./";
class Options extends Component {
  render() {
    return (
      <div className="options">
        <div className="row">
          <div className="col l10 offset-l1 m12 offset-m0">
            <div className="col s12">
              <div className="epic-title-container">
                <div className="epic-title">
                  <p> Get ready for an epic week </p>
                </div>
                <hr />
              </div>
            </div>

            <div className="col m4 s12">
              <Option
                image={require("./images/keynotes.png")}
                title="Keynotes"
                link={"/keynotes"}
              />
            </div>
            <div className="col m4 s12">
              <Option
                image={require("./images/sessions.png")}
                title="Sessions"
                link={"/sessions"}
              />
            </div>
            <div className="col m4 s12">
              <Option
                image={require("./images/activities.png")}
                title="Activities"
                link={"/activities"}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="centered">
            <a
              className="view-full-schedule"
              href="/schedule?trk=www.google.com,www.google.com"
            >
              View the full schedule
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Options;
