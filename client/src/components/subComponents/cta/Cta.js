import React from "react";
import { Link } from "react-router-dom";
import ModalSchedule from "../modal-schedule/ModalSchedule";
import "./Cta.css";

const Cta = ({ user, userName }) => {
  return (
    <div>
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
      {/* <button
        type="button"
        className="btn-schedule"
        data-bs-toggle="modal"
        data-bs-target="#schedule"
      >
        <span>Book Schedule</span>
      </button> */}

      {/* Modal Form */}
      {/* <ModalSchedule /> */}
    </div>
  );
};

export default Cta;
