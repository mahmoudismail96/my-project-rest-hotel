import React from "react";
import "./CommonHero.css";
const CommonHero = ({ text, img }) => {
  return (
    <div className="common_hero">
      <div className="text">
        <h2>{text}</h2>
      </div>
      <div className="img">
        <img src={img} />
      </div>
    </div>
  );
};

export default CommonHero;
