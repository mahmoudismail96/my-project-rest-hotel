import React from "react";
import "./Rooms.css";

const Rooms = () => {
  return (
    <section className="rooms">
      <div className="rooms_headr">
        <h2>Rooms / Suites</h2>
        <p>
          Our suites are made of the best facilities to bring you the comfort
          you deserve. The rooms are affordable and promise maximum comfort.
          These rooms are furnished with the best of materials
        </p>
      </div>
      <div className="img_r">
        <div className="img_container">
          <div className="item1">
            <button className="btn">Book Room</button>
            <div className="text">
              <p>Standard Room</p>
              <span>NGN 20,000 / Night</span>
            </div>
          </div>
          <div className="item2">
            <button className="btn">Book Room</button>
            <div className="text">
              <p>Standard Room</p>
              <span>NGN 20,000 / Night</span>
            </div>
          </div>
          <div className="item3">
            <button className="btn">Book Room</button>
            <div className="text">
              <p>Standard Room</p>
              <span>NGN 20,000 / Night</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
