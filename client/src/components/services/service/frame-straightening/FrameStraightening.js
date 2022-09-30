import React from "react";
import { Link } from "react-router-dom";
import ModalSchedule from "../../../subComponents/modal-schedule/ModalSchedule";
import { BsArrowLeft } from "react-icons/bs";
import Contact from "../../../contact/Contact";
import Copyright from "../../../copyright/Copyright";
import "./FrameStraightening.css";

const FrameStraightening = ({ user, userName }) => {
  return (
    <div className="frame-straightening">
      <div className="frame-straightening-container container">
        <div className="frame-straightening-content">
          <Link to="/" className="frame-straightening-link-home">
            <BsArrowLeft className="arrow-left" />
            <span className="frame-straightening-text-left">Home</span>
          </Link>

          <span> /</span>
          <Link to="/services" className="services-link">
            <span className="frame-straightening-text-middle"> Services </span>
          </Link>

          <span className="frame-straightening-text-right">
            {" "}
            / Frame Straightening
          </span>

          <div className="frame-straightening-description">
            <div className="frame-straightening-left">
              <p>
                Frame damage occur as a result of an accident. This is a serious
                damage but can be corrected without having to replace it.
                Contact Mag's Auto Repair as soon as possible if you have frame
                damage. Problems with the frame can cause changes of your car`s
                aerodynamics, deterioration of handling, and other dangerous
                consequences.
              </p>

              <p>
                Contact Mag's Auto Repair, Seaside Blvd, Pasay PH for
                straightening the frame. What we offer:
              </p>

              <ul>
                <li>
                  We work with any types of frames (uni-body frames and ladder
                  frames)
                </li>
                <li>
                  We fully comply with the technical requirements of the car
                  manufacturers
                </li>
                <li>We have more than 5 years of experience</li>
              </ul>

              <p>
                At Mag's Auto Repair, we work with frames of cars, trucks, SUV,
                vans, buses, trailers. We fix any types of curvature, including
                lateral, diagonal, vertical bends and twists.
              </p>

              <p>
                Frame alignment is performed by specialists who work with frames
                every day, learning about new technologies, improving knowledge
                regularly.
              </p>

              <p>
                We offer frame straightening starting from ₱₱. The exact cost is
                determined after a diagnostic and is calculated.
              </p>

              <p>
                Call us or fill out the form – we will make an appointment at
                your convenient time for a free inspection.
              </p>
            </div>

            <div className="frame-straightening-right">
              <div
                className="frame-straightening-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="frame-straightening-img"></div>
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

export default FrameStraightening;
