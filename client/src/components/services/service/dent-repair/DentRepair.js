import React from "react";
import { Link } from "react-router-dom";
import ModalSchedule from "../../../subComponents/modal-schedule/ModalSchedule";
import { BsArrowLeft } from "react-icons/bs";
import Contact from "../../../contact/Contact";
import Copyright from "../../../copyright/Copyright";
import "./DentRepair.css";

const DentRepair = ({ user, userName }) => {
  return (
    <div className="dent-repair">
      <div className="dent-repair-container container">
        <div className="dent-repair-content">
          <Link to="/" className="dent-repair-link-home">
            <BsArrowLeft className="arrow-left" />
            <span className="dent-text-left">Home</span>
          </Link>

          <span> /</span>
          <Link to="/services" className="services-link">
            <span className="dent-text-middle"> Services </span>
          </Link>

          <span className="dent-text-right"> / Dent Repair</span>

          <div className="dent-repair-description">
            <div className="dent-repair-left">
              <p>
                Most dents, even large ones, can be easily repaired. But car
                owners consider removing dents to be a simple task and decide to
                do it themselves. It is good if you have experience and
                equipment. Otherwise, an attempt to eliminate the dent on your
                own would aggravate the problems:
              </p>

              <ul>
                <li>Paintwork is damaged</li>
                <li>Metal is damaged</li>
              </ul>

              <p>
                Consider using the services of specialists at Mag's Auto Repair,
                Seaside Blvd, Pasay PH. We carry out paint-free removal of dents
                according to a well-established method, using accurate and
                reliable mini-lifters, glue, reverse pistols, fungi from top
                manufacturers in the USA. Contact us to eliminate small and
                large dents in 1-2 days at the best value.
              </p>

              <p>
                We work with all types of cars. Our specialists of Mag's Auto
                Repair will effectively solve the problem of dents on any
                vehicle. We offer our customers the best value and warranty for
                all types of repairs. We carry out fast and accurate diagnostics
                and always meet the deadlines.
              </p>

              <p>
                Contact us by phone or using the contact form – we will make an
                appointment and will diagnose your car for free.
              </p>
            </div>

            <div className="dent-repair-right">
              <div
                className="dent-repair-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="dent-repair-img"></div>
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

export default DentRepair;
