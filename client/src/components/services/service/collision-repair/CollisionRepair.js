import React from "react";
import { Link } from "react-router-dom";
import ModalSchedule from "../../../subComponents/modal-schedule/ModalSchedule";
import { BsArrowLeft } from "react-icons/bs";
import "./CollisionRepair.css";
import Contact from "../../../contact/Contact";
import Copyright from "../../../copyright/Copyright";

const CollisionRepair = ({ user, userName }) => {
  return (
    <div className="collision-repair">
      <div className="collision-repair-container container">
        <div className="collision-repair-content">
          <Link to="/" className="collision-repair-link-home">
            <BsArrowLeft className="arrow-left" />
            <span className="collision-text-left">Home</span>
          </Link>

          <span> /</span>
          <Link to="/services" className="services-link">
            <span className="collision-text-middle"> Services </span>
          </Link>

          <span className="collision-text-right"> / Collision Repair</span>

          <div className="collision-repair-description">
            <div className="collision-repair-left">
              <p>
                Repairing a vehicle after a collision is in most cases a complex
                and extensive task. It is necessary to restore the geometry of
                the body and its parts, as well as other work, such as replacing
                the radiator.
              </p>
              <p>
                Minor to medium damage usually resolve quickly. Specialists
                repair damaged body parts and change a broken windshield and
                headlights.
              </p>

              <p>
                Severe damage takes longer to repair. Often the front mounting
                plate has to be changed and sometimes the collision has to be
                removed. The shock load is distributed over all the power
                elements, the body is severely damaged, and the some parts can
                be displaced. Such problems can be fixed only if there are
                experienced specialists and professional equipment. We have both
                at Mag's Auto Repair.
              </p>

              <p>Reasons to request a car collision repair service:</p>

              <ul>
                <li>
                  We have proper equipment and carry out accurate diagnostics
                  and high-quality repairs in case of damage of any nature
                </li>
                <li>We accept cars of any manufacturers</li>
                <li>
                  We offer our services even in difficult cases and repair minor
                  and severe defects
                </li>
                <li>
                  We offer our clients the best value for all our services
                </li>
              </ul>

              <p>
                At Mag's Auto Repair, Seaside Blvd, Pasay PH, we work with
                original spare parts and meet the deadlines. When finished, you
                will have a fully functional car.
              </p>

              <p>
                The cost of work is calculated individually after a free
                diagnostic. Call us if you have any questions.
              </p>
            </div>

            <div className="collision-repair-right">
              <div
                className="collision-repair-item"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="collision-repair-img"></div>
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

export default CollisionRepair;
