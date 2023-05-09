import React from "react";
import "./HeroSec.css";
import img from "../../../assets/img/video.jpg";

const HeroSec = () => {
  return (
    <section className="hero">
      <div className="hero_wrp">
        <div className="hero_text">
          <h2>A resting place that suits you</h2>
          <p>
            Our suites are made of the best failities to bring you the comfort
            you deserve.
          </p>
        </div>
        <div className="hero_img">
          <img src={img} alt="hotel img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
