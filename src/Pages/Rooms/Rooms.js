import React from "react";
import "./Rooms.css";
import CommonHero from "../../Components/CommonHero/CommonHero";
import img from "../../assets/img/room.jpg";

const Rooms = () => {
  return (
    <div>
      <CommonHero text="Rooms & Rates" img={img} />
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
      <div className="roms_img_container">
        <div className="item_1">
          <button className="btn">Book Room</button>
          <div className="text_room">
            <p>Standard Room</p>
            <span>NGN 20,000 / Night</span>
          </div>
        </div>
        <div className="item_2">
          <button className="btn">Book Room</button>
          <div className="text_room">
            <p>Standard Room</p>
            <span>NGN 20,000 / Night</span>
          </div>
        </div>
        <div className="item_3">
          <button className="btn">Book Room</button>
          <div className="text_room">
            <p>Standard Room</p>
            <span>NGN 20,000 / Night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
