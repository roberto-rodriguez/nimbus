import React, { Component } from "react";
import { ColoredHeader, RegistrationOpen, Footer } from "../../cmp";
import { Session } from "./cmp";
import { Knote } from "../keynotes/cmp/";

const sessions = [
  {
    title: "Breakout Content",
    text:
      "This year at re:Invent, we’ll have more than 2,500 breakout sessions, workshops, chalk talks, and builders sessions that cover Nimbus core topics and highlight the emerging technologies that we are developing."
  },
  {
    title: "Bootcamps",
    text:
      "Bootcamps offer opportunities to hone your existing skills and learn new ways of working with Nimbus. We offer partner bootcamps and certification exam readiness bootcamps on Monday and Tuesday in either half-day or full-day sessions."
  },
  {
    title: "Certifications",
    text:
      "Becoming Nimbus Certified helps learners build credibility and confidence by validating their cloud expertise with an industry-recognized credential."
  },
  {
    title: "Hands-on Labs",
    text:
      "Practice and build your Nimbus skills in hands-on labs, which are available with limited seating. Also, be sure to reserve a seat in the spotlight labs, which are guided, deep dive lab sessions."
  },
  {
    title: "Expo",
    text:
      "The Expo at the Venetian will host the Nimbus Village, Developer Lounge, sponsor booths, content theater, partner theaters, Builders Fair, and other lounges. Come by and explore all that the Expo has to offer!"
  },
  {
    title: "The Quad",
    text:
      "The Quad will host the Builders Fair, sponsor activations, a content theater for watching breakout sessions, and other hands-on activities."
  }
];

class Sessions extends Component {
  render() {
    return (
      <div className="sessions">
        <ColoredHeader title={"Sessions"} />

        <div className="blue-bck ptl">
          <br />
          <Knote
            data={{
              title: "Session Catalog",
              image: require("./images/session.jpg"),
              text:
                "The Nimbus Summit 2020 session catalog is now live! Check out the 2020 session catalog for a preview of what you will see at the Summit. We will continue to add to the catalog throughout the next several months, so check back for updates."
            }}
          />
          <div className="row session ptl pbxl mb0 ">
            <div className="col l8 offset-l2 s10 offset-s1 ">
              {sessions.map((session, i) => (
                <Session session={session} key={i} />
              ))}
            </div>
          </div>
        </div>
        <RegistrationOpen />
        <Footer />
      </div>
    );
  }
}

export default Sessions;
