import axios from "axios";
import React, { useRef, useState } from "react";
import { createCar } from "../../../functions/createCar";
import useClickOutside from "../../../helpers/clickOutside";

import "./style.css";

const AddCar = ({ setVisible, user }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [car_brand, setCar_brand] = useState();
  const [car_model, setCar_model] = useState();
  const [car_year, setCar_year] = useState(2016);
  const [car_variant, setCar_variant] = useState();
  const popup = useRef(null);
  useClickOutside(popup, () => {
    setVisible(false);
  });

  const carSubmit = async (e) => {
    setLoading(true);

    const res = await createCar(
      car_brand,
      car_model,
      car_year,
      car_variant,
      user.id,
      user.token
    );
    setLoading(false);
    if (res === "ok") {
      setCar_brand("");
      setCar_model("");
      setCar_year(2016);
      setCar_variant("");
      setVisible(false);
    } else {
      setError(res);
    }
  };

  return (
    <div className="blur">
      <div className="addCar_container" ref={popup}>
        {error && <div>{error}</div>}
        <div className="container_header">
          <div
            className="small_circle"
            onClick={() => {
              setVisible(false);
            }}
          >
            <i className="exit_icon"></i>
          </div>
          <span>Add Car</span>
        </div>
        <form
          className="addCar_form"
          onSubmit={() => {
            carSubmit();
          }}
          encType="multipart/form-data"
        >
          <div className="form-floating">
            <input
              type="text"
              className="form-control brand"
              id="car_brand"
              placeholder="Brand"
              onChange={(e) => setCar_brand(e.target.value)}
            />
            <label htmlFor="car_brand">Brand</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control model"
              id="car_model"
              placeholder="Model"
              onChange={(e) => setCar_model(e.target.value)}
            />
            <label htmlFor="car_model">Model</label>
          </div>

          <div className="form-floating">
            <input
              type="number"
              className="form-control year"
              id="car_year"
              placeholder="Year"
              min="1900"
              max="2022"
              step="1"
              value={car_year}
              onChange={(e) => setCar_year(e.target.value)}
            />
            <label htmlFor="car_year">Year</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control variant"
              id="car_variant"
              placeholder="Variant"
              onChange={(e) => setCar_variant(e.target.value)}
            />
            <label htmlFor="car_variant">Variant</label>
          </div>

          <button className="orange_btn">Add Car</button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
