import React from "react";
import Cta from "../subComponents/cta/Cta";
import "./Hero.css";

const Hero = ({ user, userName }) => {
  return (
    <div className="hero-section">
      <div className="hero-bg">
        <div className="hero-content container">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <h1 className="hero-title">Top service is our motive.</h1>
            <h5 className="hero-description">Because you deserve the best.</h5>
          </div>

          {/* book btn */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="1200"
            data-aos-easing="ease-in"
          >
            <Cta user={user} useName={userName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
