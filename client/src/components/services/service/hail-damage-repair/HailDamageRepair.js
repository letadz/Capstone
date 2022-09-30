import React from "react";
import { Link } from "react-router-dom";
import ModalSchedule from "../../../subComponents/modal-schedule/ModalSchedule";
import { BsArrowLeft } from "react-icons/bs";
import "./HailDamageRepair.css";
import Contact from "../../../contact/Contact";
import Copyright from "../../../copyright/Copyright";

const HailDamageRepair = ({ user, userName }) => {
  return (
    <div className="hail-damage-repair">
      <div className="hail-damage-repair-container container">
        <div className="hail-damage-repair-content">
          <Link to="/" className="hail-damage-repair-link-home">
            <BsArrowLeft className="arrow-left" />
            <span className="hail-damage-text-left">Home</span>
          </Link>

          <span> /</span>
          <Link to="/services" className="services-link">
            <span className="hail-damage-text-middle"> Services </span>
          </Link>

          <span className="hail-damage-text-right"> / Hail Damage Repair</span>

          <div className="hail-damage-repair-description">
            <div className="hail-damage-repair-left">
              <p>
                We fix the hail damage on any part of the car. The type of
                repair work depends on the severity of the damage. It can be:
              </p>

              <ul>
                <li>Minor shallow scratches</li>
                <li>Chips without dents</li>
                <li>Dents without damage to paintwork</li>
                <li>Deep dents, damaged paintwork and glass</li>
              </ul>

              <p>
                Horizontal surfaces receive the most damage, as they absorb all
                the shock. The sides can be covered with scratches, as the hail
                touches them tangentially.
              </p>

              <p>
                Some of the defects do not appear serious, but they still need
                to be fixed, as soon as possible. For example, in the place of a
                chip on the paintwork, a corrosion center will appear over time.
                And the crack in the windshield will grow larger and obstruct
                view.
              </p>

              <p>
                Contact Mag's Auto Repair, Seaside Blvd, Pasay PH to repair hail
                damage. We fix minor and serious damage. Our services:
              </p>

              <ul>
                <li>Putty, painting, priming</li>
                <li>Straightening without painting</li>
                <li>Replacement of car body parts</li>
              </ul>

              <p>
                We will determine the best way to repair hail damage and
                calculate the cost of services. We offer our customers the best
                value for all types of work and a warranty for our repair work.
              </p>

              <p>
                Call us or fill out the form to make an appointment. We will
                inspect your car and access the damage for FREE.
              </p>
            </div>

            <div className="hail-damage-repair-right">
              <div
                className="hail-damage-repair-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="hail-damage-repair-img"></div>
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

export default HailDamageRepair;
