import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { historyReducer } from "../../functions/reducers";
import CreateBooking from "../../pages/profile/createHistory";
import "./style.css";

const Car = ({ car, user }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="car_container">
      <Moment fromNow interval={30}>
        {car.createdAt}
      </Moment>
      <div className="car_image">
        <img src={car.image} alt="" />
      </div>

      <div className="car_text">
        <h3>{car.car_brand}</h3>
        <div className="car_details">
          <div className="model">
            <span className="car_info">Model:</span>
            <span>{car.car_model}</span>
          </div>

          <div className="year">
            <span className="car_info">Year:</span>
            <span>{new Date(car.car_year).getFullYear()}</span>
          </div>

          <div className="variant">
            <span className="car_info">Variant:</span>
            <span>{car.car_variant}</span>
          </div>
        </div>
      </div>

      <div className="btns_container">
        <button
          className="red_btn"
          onClick={() => {
            setVisible(true);
          }}
        >
          BOOK A SERVICE
        </button>
        <button className="gray_btn">REPAIR STATUS</button>
        <button className="gray_btn">SERVICE HISTORY</button>
      </div>
      {visible && (
        <CreateBooking user={user} car={car} setVisible={setVisible} />
      )}
    </div>
  );
};

export default Car;
