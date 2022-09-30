import React from "react";
import { Link } from "react-router-dom";
import ModalSchedule from "../../../subComponents/modal-schedule/ModalSchedule";
import { BsArrowLeft } from "react-icons/bs";
import Contact from "../../../contact/Contact";
import Copyright from "../../../copyright/Copyright";
import "./TransmissionRepair.css";

const TransmissionRepair = ({ user, userName }) => {
  return (
    <div className="transmission-repair">
      <div className="transmission-repair-container container">
        <div className="transmission-repair-content">
          <Link to="/" className="transmission-repair-link-home">
            <BsArrowLeft className="arrow-left" />
            <span className="transmission-text-left">Home</span>
          </Link>

          <span> /</span>
          <Link to="/services" className="services-link">
            <span className="transmission-text-middle"> Services </span>
          </Link>

          <span className="transmission-text-right">/ Transmission Repair</span>

          <div className="transmission-repair-description">
            <div className="transmission-repair-left">
              <p>
                For its correct operation, regular professional maintenance of
                transmission is required, and in the event of a breakdown,
                high-quality repair is needed.
              </p>

              <p>The reasons for the breakdown may be as follows:</p>

              <ul>
                <li>Physical wear of parts</li>
                <li>Careless Driving</li>
                <li>Road Accident</li>
                <li>Exhaust gases gray, dark blue</li>
                <li>Use of low-quality spare parts and low-quality oil</li>
              </ul>

              <p>
                Whatever the reason, a transmission repair should be requested
                as soon as possible. Otherwise, driving becomes dangerous both
                for the driver and for others.
              </p>

              <p>
                We will repair a breakdown of any complexity at Mag's Auto
                Repair, Seaside Blvd, Pasay PH. We have professional equipment
                for diagnostics and high-quality repair of transmissions in case
                of breakdowns of any nature. Contact us if you start to notice
                signs of breakage:
              </p>

              <ul>
                <li>Burning Smell</li>
                <li>
                  Reduced ride smoothness, increased sensitivity of the car
                </li>
                <li>Problems with the transmission</li>
                <li>Oil leak</li>
              </ul>

              <p>
                The cost of work and the repair time frame at Mag's Auto Repair,
                Seaside Blvd, Pasay PH depend on the nature of the breakdown. We
                value our customers and offer the best value for our services
                and always meet the agreed deadlines.
              </p>

              <p>
                The cost of work is calculated individually after a free
                diagnostic. Call us if you have any questions.
              </p>
            </div>

            <div className="transmission-repair-right">
              <div
                className="transmission-repair-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="transmission-repair-img"></div>
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

export default TransmissionRepair;
