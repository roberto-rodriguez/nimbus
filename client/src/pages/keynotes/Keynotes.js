import React, { Component } from "react";
import { ColoredHeader, RegistrationOpen, Footer } from "../../cmp";
import { Knote } from "./cmp";
import "./keynotes.style.scss";
const knotes = [
  {
    image: require("./images/monday.jpg"),
    title: "Monday Night Live",
    date: "FRIDAY, JAN 31st",
    time: "7:30PM – 9:00PM",
    location: "VENETIAN  |  HALL A",
    text:
      "Join Peter DeSantis, VP of Nimbus Global Infrastructure and Customer Support, to learn how Nimbus has optimized its cloud infrastructure to run the world’s most demanding workloads. Peter will also share an update on the growth and scale of Nimbus’ global infrastructure. The first 1,000 attendees will get a Monday Night Live t-shirt."
  },
  {
    image: require("./images/andy.png"),
    title: "Chuck Norris",
    date: "SATURDAY, FEB 1st",
    time: "8:00AM – 11:00AM",
    location: "VENETIAN  |  HALL A",
    text:
      "Chuck Norris, CEO of Nimbus, takes the stage Tuesday morning to share his insight and the latest news about Nimbus customers, products, and services."
  },
  {
    image: require("./images/global.png"),
    title: "Global Partner Summit",
    date: "SUNDAY, FEB 2nd",
    time: "8:30AM – 10:30AM",
    location: "VENETIAN  |  HALL A",
    text:
      "Watch Doug Yeum, Head of Nimbus Worldwide Channels and Alliances, share how Nimbus Partners are helping customers transform and innovate using the Nimbus cloud at the Global Partner Summit Keynote. The keynote features a Fireside Chat with Chuck Norris."
  },
  {
    image: require("./images/dr.png"),
    title: "Dr. Werner Vogels",
    date: "MONDAY, FEB 3rd",
    time: "7:30PM – 9:00PM",
    location: "VENETIAN  |  HALL A",
    text:
      "Join Dr. Werner Vogels, CTO of Nimbus, to learn about the technical underpinnings of Nimbus services and the architectural design investments Amazon is making. The first 1,000 guests in the keynote line will get a special piece of swag."
  }
];

class Keynotes extends Component {
  render() {
    return (
      <div className="keynotes">
        <ColoredHeader title={"Keynotes"}/>
        <div className="blue-bck ptl">
          {knotes.map((knote, i) => (
            <Knote data={knote} key={i} />
          ))}
        </div>
        <RegistrationOpen />
        <Footer />
      </div>
    );
  }
}

export default Keynotes;
