import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-container container">
        <div className="about-content">
          <div className="about-left">
            <div className="about-img"></div>
          </div>

          <div className="about-right">
          <h1 className="about-title">About Us</h1>

            <p className="about-text-top">
              We offer a full range of garage services to vehicle owners located
              in Seaside Blvd. Pasay, Metro Manila. All mechanic services are
              performed by highly qualified mechanics. We can handle any car
              problem.
            </p>

            <p className="about-text-bottom">
              Our professionals know how to handle a wide range of car services.
              Whether you drive a passenger car or medium sized truck or SUV,
              our mechanics strive to ensure that your vehicle will be
              performing at its best before leaving our car shop. Whether you
              drive a medium sized truck or passenger car or SUV, our mechanics
              strive to ensure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
