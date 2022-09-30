import React from "react";
import { Link } from "react-router-dom";
import ModalSchedule from "../../../subComponents/modal-schedule/ModalSchedule";
import { BsArrowLeft } from "react-icons/bs";
import Contact from "../../../contact/Contact";
import Copyright from "../../../copyright/Copyright";
import "./CarRepairServices.css";

const CarRepairServices = ({ user, userName }) => {
  return (
    <div className="car-repair">
      <div className="car-repair-container container">
        <div className="car-repair-content">
          <Link to="/" className="car-repair-link-home">
            <BsArrowLeft className="arrow-left" />
            <span className="car-text-left">Home</span>
          </Link>

          <span> /</span>
          <Link to="/services" className="services-link">
            <span className="car-text-middle"> Services </span>
          </Link>

          <span className="car-text-right"> / Car Repair Services</span>

          <div className="car-repair-description">
            <div className="car-repair-left">
              <p>
                At Mag's Auto Repair, Seaside Blvd, Pasay PH, we offer repair
                services for cars of any makes and models. We work with all
                types of cars: sedans, mini-vans, trucks and SUV. We can handle
                repairs of any complexity:
              </p>

              <ul>
                <li>Painting and Polishing</li>
                <li>Dent Repair</li>
                <li>Maintenance</li>
                <li>Body Repair</li>
                <li>Tire Fitting</li>
              </ul>

              <p>Why choose us?</p>

              <p>We offer our customers the best value:</p>

              <ul>
                <li>Engine Repair</li>
                <li>Transmission Repair</li>
                <li>Dent Repair</li>
                <li>Rust Repair</li>
                <li>Glass Repair</li>
              </ul>

              <p>We deliver quality at affordable price.</p>

              <p>
                5 years of experience. We work with dozens of cars every day,
                gaining more and more experience. We constantly improve our
                knowledge and skills.
              </p>

              <p>We provide extended warranty for all our services.</p>

              <p>
                Contact Mag's Auto Repair for repairs of any complexity. Call us
                Now to schedule free diagnostic.
              </p>
            </div>

            <div className="car-repair-right">
              <div
                className="car-repair-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="car-repair-img"></div>
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

export default CarRepairServices;
