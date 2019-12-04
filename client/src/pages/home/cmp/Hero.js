import React, { Component } from "react";
import "./hero.style.scss";
import video from "./images/summit-2019-hero.mp4";

class Hero extends Component {
  render() {
    return (
      <div>
        <div className="hero-video">
          <div class="row mb0" style={{ opacity: 1 }}>
            <div class="column">
              <video id="background-video" loop autoPlay>
                <source src={video} type="video/mp4" />
                <source src={video} type="video/ogg" />
                Your browser does not support the video tag.
              </video>

              <div className="hero-label mb0">
                <p className="hero-label__top">Nimbus</p>
                <p className="hero-label__middle">SUMMIT 2020</p>
                <p className="hero-label__bottom">
                  January 31 - February 3 · Las Vegas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
