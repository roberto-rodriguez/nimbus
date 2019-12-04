import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.style.scss";

const views = [
  {
    image: require("./images/k3_mobile-app.png"),
    title: "Mobile App",
    text:
      "The Nimbus Summit Mobile App is an essential download for your time at the summit. Download from the Google Store or App Store today."
  },
  {
    image: require("./images/k1_dodgeball.png"),
    title: "Ping Pong Tournament",
    text:
      "Join us for some more Dodgeball this year at re:Invent, hosted at re:Play – the ultimate adult playground."
  },
  {
    image: require("./images/k4_get-around.jpg"),
    title: "Getting Around",
    text:
      "Need to figure out your best transportation options for re:Invent and re:Play? We’ve got you covered!"
  },
  {
    image: require("./images/k1_dodgeball.png"),
    title: "Dodge Ball",
    text:
      "Get ready to bring your table tennis A-game to re:Invent—for the 2nd annual AWS Ping Pong Tournament."
  }
];

class Karousel extends Component {
  render() {
    const viewList = views.map(this.buildView);

    return (
      <div className="carousel">
        <div className="carousel__overlay">
          <div className="row">
            <div className="col l8 offset-l2 m10 offset-m1 s12">
              <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                swipeable={true}
                emulateTouch={true}
              >
                {viewList}
              </Carousel>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }

  buildView = ({ image, title, text }, i) => (
    <div className={"k-step"}>
      <img src={image} />
      <br />
      <div className="row">
        <div className="col l6 m9 s12">
          <h2>{title}</h2>
          <p>{text}</p>
          <br />
          <a
            className="learn-more"
            href=""
            target="_blank"
          >
            Learn More
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Karousel;
