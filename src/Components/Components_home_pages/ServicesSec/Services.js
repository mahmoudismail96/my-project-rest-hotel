import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <section className="services">
      <div className="services_headr">
        <h2>
          We offer the best services in
          <br />
          the industry to make you feel comfortable
        </h2>
      </div>

      <div className="results__container">
        <div className="result">
          <span className="result__number">10K+</span>
          <span className="result__category">happy customers</span>
        </div>

        <div className="result">
          <span className="result__number">30</span>
          <span className="result__category">locations</span>
        </div>

        <div className="result">
          <span className="result__number">700</span>
          <span className="result__category">room</span>
        </div>

        <div className="result">
          <span className="result__number">100k</span>
          <span className="result__category">bookings</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
