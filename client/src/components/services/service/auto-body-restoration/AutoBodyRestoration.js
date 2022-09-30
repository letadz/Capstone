import React from "react";
import { Link } from "react-router-dom";
import ModalSchedule from "../../../subComponents/modal-schedule/ModalSchedule";
import { BsArrowLeft } from "react-icons/bs";
import "./AutoBodyRestoration.css";
import Contact from "../../../contact/Contact";
import Copyright from "../../../copyright/Copyright";

const AutoBodyRestoration = ({ user, userName }) => {
  return (
    <div className="auto-body-repair">
      <div className="auto-body-repair-container container">
        <div className="auto-body-repair-content">
          <Link to="/" className="auto-body-repair-link-home">
            <BsArrowLeft className="arrow-left" />
            <span className="auto-body-text-left">Home</span>
          </Link>

          <span> /</span>
          <Link to="/services" className="services-link">
            <span className="auto-body-text-middle"> Services </span>
          </Link>

          <span className="auto-body-text-right"> / Auto-Body Repair</span>

          <div className="auto-body-repair-description">
            <div className="auto-body-repair-left">
              <p>
                Our body repair service will restore the damage caused by minor
                traffic accidents.
              </p>
              <p>
                This service is requested if there are minor and serious damages
                on the car body. Even small changes can affect the car handling,
                which will lead to consequences, and can:
              </p>

              <ul>
                <li>Accelerate tire wear</li>
                <li>Influence the behavior of the car on sharp turns</li>
                <li>Cause the appearance of corrosion.</li>
              </ul>

              <p>
                If your car requires a high-quality body repair, make an
                appointment with our specialist at Mag's Auto Repair, Seaside
                Blvd. Pasay PH. We work with cars of any manufacturers, and
                carry out work of any complexity:
              </p>
              <ul>
                <li>We repair, replace damaged body parts</li>
                <li>We restore the paintwork</li>
                <li>Correct the geometry of the car body</li>
              </ul>

              <p>
                Our company focuses on providing quality repair job on time.
                Speed ​​and quality are not the only advantages of our car
                service. Motorists choose Mag's Auto Repair, Seaside Blvd, Pasay
                PH for other advantages:
              </p>

              <ul>
                <li>Best value</li>
                <li>Extended warranty</li>
                <li>Certified materials and equipment</li>
              </ul>

              <p>
                The cost of repairs is provided individually after a diagnostic.
                Contact us now to get a <strong>FREE diagnostic</strong>. You
                can schedule an appointment by phone or by filling out this
                form.
              </p>
            </div>

            <div className="auto-body-repair-right">
              <div
                className="auto-body-repair-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="auto-body-repair-img"></div>
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

export default AutoBodyRestoration;
