import React from "react";
import "./styles.scss"
import { LandingCenter, LandingCommunity, LandingWeather } from "./subSections";
import { FactCard } from "../../Components/fact-card/fact-card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../../res/logo.png"
import can from "../../res/Ellipse.png"
import greenshift from "../../res/greenshift.png"
import bottle from "../../res/maxresdefault.jpg"
import ldpe from "../../res/ldpe.jpg"
import cardboard from "../../res/carboard.jpg"

const Landing = () => {
  const facts = [
    {
      img: <img src={can} />,
      content:
        "If you break the tip of the can, it can not be recycled"
    },
    {
      img: <img src={bottle} />,
      content: "Remove the soft plastic around the bottle"
    },
    {
      img: <img src={greenshift} />,
      content:
        "If you want to buy better, get the Green Switch App"
    },
    {
      img: <img src={ldpe} />,
      content: "Soft light plastic is NOT recyclable, it gets misidentified"
    },
    {
      img: <img src={cardboard} />, 
      content: "If cardboard is wet do not recycle it"
    }
  ];
  return (<div className="main">
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Reality Check Logo" />
      </div>
      <span className="title">Welcome to Howick</span>
    </div>
    <h1 className="connected">Hā Ao Kotahi - We Are One</h1>
    <div className="guts">
      <div className="weatherholder">
        <LandingWeather />
        <div
          id="info-carousel"
          style={{ backgroundColor: "white" }}
        >
          <Carousel
            showThumbs={false}
            style={{ backgroundColor: "white" }}
            autoPlay={true}
            infiniteLoop={true}
            interval={7000}
          >
            {facts.map(fact => (
              <FactCard content={fact.content} image={fact.img}/>
            ))}
          </Carousel>
        </div>
      </div>
      <LandingCenter />
      <LandingCommunity />
    </div>
  </div>);
};

export default Landing;
