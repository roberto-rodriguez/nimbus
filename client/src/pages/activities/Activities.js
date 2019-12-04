import React, { Component } from "react";
import { ColoredHeader, RegistrationOpen, Footer } from "../../cmp";
import { Activity } from "./cmp";
import { Knote } from "../keynotes/cmp";
import "./activities.style.scss";

const activities = [
  {
    title: "Midnight Madness",
    date: "Thursday, Jan 30th",
    time: "10:15PM – 12:15AM",
    location: "VENETIAN",
    image: require("./images/activity_2.jpg"),
    text:
      "This year at The Summit, we’ll have more than 2,500 breakout sessions, workshops, chalk talks, and builders sessions that cover Nimbus core topics and highlight the emerging technologies that we are developing."
  },
  {
    title: "Welcome Reception",
    date: "Friday, Jan 31th",
    time: "4:00PM – 7:00PM",
    location: "VENETIAN, ARIA",
    image: require("./images/activity_3.jpg"),
    text:
      "We’ll start the week off right with our Welcome Reception, providing you with help and assistance on how to get oriented and covering what’s in store for the week ahead. This is definitely the best way to arrive in style."
  },
  {
    title: "Restaurant Receptions",
    date: "Saturday, Feb 1st",
    location: "Multiple Locations",
    image: require("./images/activity_4.jpg"),
    text:
      "Mix business with pleasure at our vibrant Restaurant Receptions. Meet people from across the tech world, connect on topics of interest to you and spark the conversation you want to be part of at a range of wonderful venues."
  },
  {
    title: "After Hours at The Summit",
    date: "Sunday, Feb 2nd",
    location: "Multiple Locations",
    image: require("./images/activity_4.jpg"),
    text:
      "Experience Nimbus’s unique culture at one (or more!) of our quirky events. Whether it’s board games, bingo, arts & crafts or ‘80s sing-alongs, we’ve got something for everyone. Sign up today and join in the fun!"
  },
  {
    title: "Summit Play",
    date: "Monday, Feb 3rd",
    time: "8:00PM – MIDNIGHT",
    location: "VENETIAN",
    image: require("./images/activity_6.png"),
    text:
      "It’s more than just an EDM concert and interactive extravaganza—the Summit is the ultimate playground for those of us who didn’t get the memo that grown-ups don’t play. "
  }
];

const video = require("./images/activities.mp4");

class Activities extends Component {
  render() {
    return (
      <div className="sessions">
        <ColoredHeader title={"Activities"} />

        <div className="blue-bck ptl">
          <div className="row knote ptl pbl mb0">
            <div className="col l8 offset-l2 s10 offset-s1 ">
              <div className="col s12 m6">
                <video loop autoPlay style={{ width: "100%" }}>
                  <source src={video} type="video/mp4" />
                  <source src={video} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="col s12 m6 pll">
                <p className="activity__title mbm">
                  Experience Nimbus’s unique culture at Summit 2020
                </p>
                <p>
                  Whether it’s board games, bingo, arts & crafts or ‘80s
                  sing-alongs, we’ve got something for everyone. Sign up today
                  and join in the fun! In addition to the activities below, look
                  out for our Mechanical Bull at Venetian, Game Room at ARIA,
                  Doodle Wall at Venetian, Photo Booth at Sands Foyer,
                  Typewriter Challenge at the Quad, and lots more Campus-wide
                  fun!
                </p>
              </div>
            </div>
          </div>
          <br />

          {activities.map((activity, i) => (
            <Activity activity={activity} key={i} />
          ))}
        </div>
        <RegistrationOpen />
        <Footer />
      </div>
    );
  }
}

export default Activities;
