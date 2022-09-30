import React from "react";
import { Link } from "react-router-dom";
import ModalSchedule from "../../../subComponents/modal-schedule/ModalSchedule";
import { BsArrowLeft } from "react-icons/bs";
import Contact from "../../../contact/Contact";
import Copyright from "../../../copyright/Copyright";
import "./GlassRepair.css";

const GlassRepair = ({ user, userName }) => {
  return (
    <div className="glass-repair">
      <div className="glass-repair-container container">
        <div className="glass-repair-content">
          <Link to="/" className="glass-repair-link-home">
            <BsArrowLeft className="arrow-left" />
            <span className="glass-text-left">Home</span>
          </Link>

          <span> /</span>
          <Link to="/services" className="services-link">
            <span className="glass-text-middle"> Services </span>
          </Link>

          <span className="glass-text-right"> / Glass Repair</span>

          <div className="glass-repair-description">
            <div className="glass-repair-left">
              <p>
                Automotive glass repair usually involves repairing scratches,
                chips, cracks and other defects. Our specialists can even remove
                dents and through holes. You do not have to completely change
                the glass, which is more expensive and takes more time.
              </p>
              <p>
                The most fragile part of a car is the windshield. Defects appear
                on it for various reasons:
              </p>

              <ul>
                <li>Temperature differences</li>
                <li>Mechanical impact</li>
              </ul>

              <p>
                It must be repaired in order for the driver to have unobstructed
                view. Side and rear windows suffer less often, but also need to
                be repaired when damaged. Window damage can lead:
              </p>

              <ul>
                <li>Spoil the general appearance of the car</li>
                <li>Over time will lead to complete destruction of glass</li>
                <li>Make it easier for thieves to get into the car</li>
              </ul>

              <p>
                Mag's Auto Repair’s specialists repair the windshield and side
                car windows. We repair defects and restore glass, avoiding
                replacement. For this, we use professional equipment and
                materials.
              </p>

              <p>
                The cost of work is calculated individually after a free
                diagnostic. Call us if you have any questions.
              </p>
            </div>

            <div className="glass-repair-right">
              <div
                className="glass-repair-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="glass-repair-img"></div>
              </div>
              {user && (
                <button
                  className="btn-schedule"
                  // type="button"
                  // className="btn-schedule"
                  // data-bs-toggle="modal"
                  // data-bs-target="#schedule"
                  // data-aos="fade-up"
                  // data-aos-anchor-placement="bottom-bottom"
                  // data-aos-delay="1000"
                  // data-aos-easing="ease-in"
                >
                  {/* <span>Book Schedule</span> */}

                  <Link to={`/profile/${userName}/cars`}>Book Schedule</Link>
                </button>
              )}
              {!user && (
                <button
                  className="btn-schedule"
                  // type="button"
                  // className="btn-schedule"
                  // data-bs-toggle="modal"
                  // data-bs-target="#schedule"
                  // data-aos="fade-up"
                  // data-aos-anchor-placement="bottom-bottom"
                  // data-aos-delay="1000"
                  // data-aos-easing="ease-in"
                >
                  {/* <span>Book Schedule</span> */}

                  <Link to={`/login`}>
                    <span>Book Schedule</span>
                  </Link>
                </button>
              )}
              {/* Book Schedule Button */}
              {/* <button
                type="button"
                className="btn-schedule"
                data-bs-toggle="modal"
                data-bs-target="#schedule"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="1000"
                data-aos-easing="ease-in"
              >
                <span>Book Schedule</span>
              </button> */}
              {/* Modal Form */}
              {/* <ModalSchedule /> */}
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <Copyright />
    </div>
  );
};

export default GlassRepair;
