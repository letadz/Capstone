import React from "react";
import { Link } from "react-router-dom";
import ModalSchedule from "../../../subComponents/modal-schedule/ModalSchedule";
import { BsArrowLeft } from "react-icons/bs";
import Contact from "../../../contact/Contact";
import Copyright from "../../../copyright/Copyright";
import "./ExteriorBodyServices.css";

const ExteriorBodyServices = ({ user, userName }) => {
  return (
    <div className="exterior-body">
      <div className="exterior-body-container container">
        <div className="exterior-body-content">
          <Link to="/" className="exterior-body-link-home">
            <BsArrowLeft className="arrow-left" />
            <span className="exterior-body-text-left">Home</span>
          </Link>

          <span> /</span>
          <Link to="/services" className="services-link">
            <span className="exterior-body-text-middle"> Services </span>
          </Link>

          <span className="exterior-body-text-right">
            / Exterior Body Services
          </span>

          <div className="exterior-body-description">
            <div className="exterior-body-left">
              <p>
                Mag's Auto Repair technicians are thoroughly trained and
                experienced in performing the full gamut of exterior car
                repairs. Our talented paint specialists, body work technicians,
                and collision repair experts are here to serve drivers in the
                Seaside Blvd. Pasay PH.
              </p>

              <p>
                Our exterior repair services improve the overall aesthetic
                appeal of vehicles while enhancing their value.
              </p>

              <p>EXTERIOR REPAIRS FOR VEHICLES</p>

              <p>
                Our highly-trained technicians can perform the following
                exterior repairs:
              </p>

              <ul>
                <li>Paintless Dent Repair (PDR)</li>
                <li>Hail Damage Repair</li>
                <li>Bumper Repair</li>
                <li>Wheel Repair</li>
                <li>Windshield Chip Repair</li>
                <li>Paint Chip Repair</li>
                <li>Scratch Repair</li>
                <li>Headlight Brightening</li>
                <li>Detail Services</li>
              </ul>

              <p>We provide extended warranty for all our services.</p>

              <p>
                Contact Mag's Auto Repair for repairs of any complexity. Call us
                Now to schedule free diagnostic.
              </p>
            </div>

            <div className="exterior-body-right">
              <div
                className="exterior-body-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="exterior-body-img"></div>
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

export default ExteriorBodyServices;
