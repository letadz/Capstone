import React from "react";
import { Link } from "react-router-dom";
import ModalSchedule from "../../../subComponents/modal-schedule/ModalSchedule";
import { BsArrowLeft } from "react-icons/bs";
import Contact from "../../../contact/Contact";
import Copyright from "../../../copyright/Copyright";
import "./RustRepair.css";

const RustRepair = ({ user, userName }) => {
  return (
    <div className="rust-repair">
      <div className="rust-repair-container container">
        <div className="rust-repair-content">
          <Link to="/" className="rust-repair-link-home">
            <BsArrowLeft className="arrow-left" />
            <span className="rust-text-left">Home</span>
          </Link>

          <span> /</span>
          <Link to="/services" className="services-link">
            <span className="rust-text-middle"> Services </span>
          </Link>

          <span className="rust-text-right"> / Rust Repair</span>

          <div className="rust-repair-description">
            <div className="rust-repair-left">
              <p>
                The service of removing rust is available at Mag's Auto Repair,
                Seaside Blvd, Pasay PH.
              </p>

              <ul>
                <li>Arches</li>
                <li>Doors</li>
                <li>The lower part of the wings</li>
                <li>Calipers</li>
                <li>Tank</li>
              </ul>

              <p>
                Contact Mag's Auto Repair for rust repair as soon as you notice
                the problem. In severe cases, the damaged part cannot be
                repaired, and at that point, we will replace it.
              </p>

              <p>
                We choose the repair method based on the severity of damage to
                the body parts and their size. Our specialists use chemical
                compounds, working with specialized equipment. Upon completion
                of the work, we carry out anti-corrosion treatment.
              </p>

              <p>Reasons to contact us:</p>

              <ul>
                <li>Best value for all services</li>
                <li>Professional equipment</li>
                <li>Experienced, qualified specialists</li>
                <li>Fast, accurate diagnostics</li>
              </ul>

              <p>
                We work with cars of any makes and models and repair defects of
                any complexity.
              </p>

              <p>Call us or fill out the form to schedule an appointment.</p>
            </div>

            <div className="rust-repair-right">
              <div
                className="rust-repair-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="rust-repair-img"></div>
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

export default RustRepair;
