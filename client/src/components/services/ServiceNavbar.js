import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Contact from "../contact/Contact";
import Copyright from "../copyright/Copyright";
import "./ServiceNavbar.css";

const ServiceNavbar = () => {
  return (
    <div className="menu-services">
      <div className="menu-services-container container">
        <Link to="/" className="services-link-home">
          <BsArrowLeft className="arrow-left" />
          <span className="services-text-left">Home</span>
        </Link>
        <span className="services-text-right"> / Services</span>

        <div className="services-container container">
          <div
            className="services-section"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <Link to="/services/engine-repair" className="services-items">
              <div className="services-img1"></div>
              <div className="services-content">
                <h4 className="services-title">Engine Repair</h4>
              </div>
            </Link>

            <Link to="/services/transmission-repair" className="services-items">
              <div className="services-img2"></div>
              <div className="services-content">
                <h4 className="services-title">Transmission Repair</h4>
              </div>
            </Link>

            <Link
              to="/services/auto-body-restoration"
              className="services-items"
            >
              <div className="services-img3"></div>
              <div className="services-content">
                <h4 className="services-title">Auto Body Restoration</h4>
              </div>
            </Link>

            <Link to="/services/collision-repair" className="services-items">
              <div className="services-img4"></div>
              <div className="services-content">
                <h4 className="services-title">Collision Repair</h4>
              </div>
            </Link>

            <Link to="/services/glass-repair" className="services-items">
              <div className="services-img5"></div>
              <div className="services-content">
                <h4 className="services-title">Glass Repair</h4>
              </div>
            </Link>

            <Link to="/services/dent-repair" className="services-items">
              <div className="services-img6"></div>
              <div className="services-content">
                <h4 className="services-title">Dent Repair</h4>
              </div>
            </Link>

            <Link to="/services/frame-straightening" className="services-items">
              <div className="services-img7"></div>
              <div className="services-content">
                <h4 className="services-title">Frame Straightening</h4>
              </div>
            </Link>

            <Link to="/services/hail-damage-repair" className="services-items">
              <div className="services-img8"></div>
              <div className="services-content">
                <h4 className="services-title">Hail Damage Repair</h4>
              </div>
            </Link>

            <Link to="/services/rust-repair" className="services-items">
              <div className="services-img9"></div>
              <div className="services-content">
                <h4 className="services-title">Rust Repair</h4>
              </div>
            </Link>

            <Link to="/services/car-repair-services" className="services-items">
              <div className="services-img10"></div>
              <div className="services-content">
                <h4 className="services-title">Car Repair Services</h4>
              </div>
            </Link>

            <Link
              to="/services/exterior-body-services"
              className="services-items"
            >
              <div className="services-img11"></div>
              <div className="services-content">
                <h4 className="services-title">Exterior Body Services</h4>
              </div>
            </Link>

            <Link
              to="/services/muffler-exhaust-services"
              className="services-items"
            >
              <div className="services-img12"></div>
              <div className="services-content">
                <h4 className="services-title">Muffler & Exhaust Services</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Contact />
      <Copyright />
    </div>
  );
};

export default ServiceNavbar;
