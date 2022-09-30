import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import Car from "../../../components/cars";
import { createCar } from "../../../functions/createCar";
import { carsReducer } from "../../../functions/reducers";
import AddCar from "../addCar";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Cars = ({ profile }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [visible, setVisible] = useState(false);

  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 500,
  //   arrows: true,
  // };

  return (
    <div className="cars_container">
      {/* <Slider {...settings} className="slider"> */}
      <div className="profile-cars_container">
        {profile.cars &&
          profile.cars.length &&
          profile.cars.map((car) => (
            <Car key={car._id} car={car} user={user} />
          ))}
      </div>
      {/* </Slider> */}

      <button
        className="orange_btn float_right"
        onClick={() => {
          setVisible(true);
        }}
      >
        Add Car
      </button>
      {visible && <AddCar user={user} setVisible={setVisible} />}
    </div>
  );
};

export default Cars;
