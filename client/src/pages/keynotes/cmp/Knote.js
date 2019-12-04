import React, { Component } from "react";

class Knote extends Component {
  render() {
    const { image, title, date, time, location, text } = this.props.data;

    return (
      <div className="row knote ptl pbl mb0">
        <div className="col l8 offset-l2 s10 offset-s1 ">
          <div className="col s12 m6">
            <img src={image} />
          </div>
          <div className="col s12 m6 pll">
            <h1>{title}</h1>
            <br />
            <h2>{date}</h2>
            <h2>{time}</h2>
            <h2>{location}</h2>
            <br />
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Knote;
