import React from "react";
import "./Facilities.css";
import CommonHero from "../../Components/CommonHero/CommonHero";
import img from "../../assets/img/facilities.jpg";

const Facilities = () => {
  return (
    <div>
      <CommonHero text="Facilities" img={img} />
      <div className="room_text">
        <p>
          Our suites are made of the best facilities to bring you the comfort
          you deserve. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="Facilities_img_container">
        <div className="item-1">
          <div className="text_Facilities">
            <p>Gym</p>
          </div>
        </div>
        <div className="item-2">
          <div className="text_Facilities-bar">
            <p>Bar</p>
          </div>
        </div>
        <div className="item-3">
          <div className="text_Facilities">
            <p>Conference Room</p>
          </div>
        </div>
        <div className="item-4">
          <div className="text_Facilities">
            <p>Conference Room</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
