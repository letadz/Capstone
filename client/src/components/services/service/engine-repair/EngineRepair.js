import React from "react";
import { Link } from "react-router-dom";
import ModalSchedule from "../../../subComponents/modal-schedule/ModalSchedule";
import { BsArrowLeft } from "react-icons/bs";
import Contact from "../../../contact/Contact";
import "./EngineRepair.css";
import Copyright from "../../../copyright/Copyright";

const EngineRepair = ({ user, userName }) => {
  return (
    <div className="engine-repair">
      <div className="engine-repair-container container">
        <div className="engine-repair-content">
          <Link to="/" className="engine-repair-link-home">
            <BsArrowLeft className="arrow-left" />
            <span className="engine-text-left">Home</span>
          </Link>
          <span> /</span>
          <Link to="/services" className="services-link">
            <span className="engine-text-middle"> Services </span>
          </Link>
          <span className="engine-text-right"> / Engine Repair</span>
          <div className="engine-repair-description">
            <div className="engine-repair-left">
              <p>
                We offer engine repair of any complexity at affordable rates.
                Proper engine maintenance and timely repair is crucial for road
                safety.
              </p>
              <p>Please contact us, if:</p>

              <ul>
                <li>The engine makes noise or knocks in the engine</li>
                <li>
                  The oil check is on, but there is definitely no problem in the
                  oil
                </li>
                <li>Oil is consumed too quickly</li>
                <li>Exhaust gases gray, dark blue</li>
                <li>Compression in the engine drops</li>
              </ul>

              <p>
                Premature wear of engine parts can happen to a new car. Most
                often this happens due to low-quality fuel, oil leaks,
                mechanical damage, and heavy loads on the engine.
              </p>

              <p>
                We repair engines of any manufacturers. We diagnose quickly and
                accurately, perform major repairs and can replace the internal
                combustion engine if needed. We repair blocks, supports, and
                change gaskets. We restore the components of the cylinder block
                and crankshaft.
              </p>
              <p>
                We use genuine parts or high quality replacements and give a
                warranty for our work depending on the breakdown. We strive to
                offer our customers the best value.
              </p>
              <p>
                Contact Mag's Auto Repair to make an appointment at your
                convenience – we will diagnose the problems.
              </p>
            </div>

            <div className="engine-repair-right">
              <div
                className="engine-repair-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="engine-repair-img"></div>
              </div>

              {/* Book Schedule Button */}
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

              {/* Modal Form
              <ModalSchedule /> */}
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <Copyright />
    </div>
  );
};

export default EngineRepair;
