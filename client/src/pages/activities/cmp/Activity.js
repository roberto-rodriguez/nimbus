import React, { Component } from "react";

class Activity extends Component {
  render() {
    const { title, date, text, time, location, image } = this.props.activity;

    return (
      <div className="row activity ptl mb0 ">
        <div className="col l8 offset-l2 s10 offset-s1 ">
          <p className="activity__sub-title mbm">{date}</p>
        </div>
        <div className="activity__body col l8 offset-l2 s10 offset-s1 ">
          <div className="col m4 s12 padding-medium">
            <img src={image} />
          </div>
          <div className="col m8 s12 padding-medium in-column">
            <p className="activity__sub-title mbm">{title}</p>

            <b>{time}</b>
            <b>{location}</b>
            <br />
            <p>{text}</p>
            <br />
            <div>
              <a className="learn-more" href="" target="_blank">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activity;
