import React, { Component } from "react";

class Session extends Component {
  render() {
    const { title, text } = this.props.session;

    return (
      <div className="col s12 m6 mtxl prm">
        <h1>{title}</h1>
        <br />
        <p>{text}</p>
        <br />
        <a className="learn-more" href="" target="_blank">
          Learn More
        </a>
      </div>
    );
  }
}

export default Session;
