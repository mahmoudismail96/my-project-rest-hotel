import React from "react";
import "./Typical.css";
import img from "../../../assets/img/section.jpg";

const Typical = () => {
  return (
    <section>
      <div className="typical">
        <div className="typical_headr">
          <h2>
            A typical
            <br />
            evening rest
          </h2>
        </div>
        <div className="typical_wrp">
          <p>
            Our suites are made of the best facilities to bring you the comfort
            you deserve. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p>
            Our suites are made of the best facilities to bring you the comfort
            you deserve. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
        <div className="div_img">
          <img src={img} alt="hotel img" />
        </div>
      </div>
    </section>
  );
};

export default Typical;
