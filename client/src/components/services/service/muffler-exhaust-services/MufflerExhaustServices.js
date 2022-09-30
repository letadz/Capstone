import React from "react";
import { Link } from "react-router-dom";
import ModalSchedule from "../../../subComponents/modal-schedule/ModalSchedule";
import { BsArrowLeft } from "react-icons/bs";
import Contact from "../../../contact/Contact";
import Copyright from "../../../copyright/Copyright";
import "./MufflerExhaustServices.css";

const MufflerExhaustServices = ({ user, userName }) => {
  return (
    <div className="muffler-exhaust">
      <div className="muffler-exhaust-container container">
        <div className="muffler-exhaust-content">
          <Link to="/" className="muffler-exhaust-link-home">
            <BsArrowLeft className="arrow-left" />
            <span className="muffler-exhaust-text-left">Home</span>
          </Link>

          <span> /</span>
          <Link to="/services" className="services-link">
            <span className="muffler-exhaust-text-middle"> Services </span>
          </Link>

          <span className="muffler-exhaust-text-right">
            / Muffler Exhaust Services
          </span>

          <div className="muffler-exhaust-description">
            <div className="muffler-exhaust-left">
              <p>
                Correct operation of the exhaust system affects the driver’s
                acoustic comfort while driving, and the performance of the
                engine. Its failure can seriously affect the operation of the
                entire vehicle and lead to breakdowns requiring costly repairs.
              </p>

              <p>
                During operation, the exhaust system is exposed to chemicals and
                other environmental factors. Due to the peculiarities of its
                location, areas of corrosion often appear on it. For these
                reasons, the exhaust system needs regular maintenance, and in
                case of any signs of a malfunction of the muffler and other
                parts, a high-quality, timely repair is required.
              </p>

              <p>Please contact Mag's Auto Repair, Seaside Blvd, Pasay PH.</p>

              <p>To eliminate the following problems:</p>

              <ul>
                <li>Loose system elements</li>
                <li>Breakdown of the muffler</li>
                <li>Corrosion</li>
                <li>The consequences of wear</li>
                <li>Clogged particle filter and catalytic converter, etc</li>
              </ul>

              <p>
                After a diagnostic, our mechanics will determine whether it is
                possible to repair the damaged element or whether it will have
                to be replaced. If it is possible to repair a damaged part
                without large-scale intervention, we do it.
              </p>
            </div>

            <div className="muffler-exhaust-right">
              <div
                className="muffler-exhaust-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="muffler-exhaust-img"></div>
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

export default MufflerExhaustServices;
