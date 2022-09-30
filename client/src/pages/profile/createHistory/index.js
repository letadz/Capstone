import axios from "axios";
import React, { useRef, useState } from "react";
import { createBooking } from "../../../functions/createBooking";
import useClickOutside from "../../../helpers/clickOutside";

import "./style.css";

const CreateBooking = ({ setVisible, user, car }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [date_book, setDate_book] = useState(null);
  const [service, setService] = useState("Body & Paint");
  const [mileAge, setMileAge] = useState(0);
  const [preferred_time, setPreferred_time] = useState("07:30 AM");
  const [book_notes, setBook_notes] = useState("");
  const popup = useRef(null);
  useClickOutside(popup, () => {
    setVisible(false);
  });
  const bookingSubmit = async (e) => {
    setLoading(true);

    const res = await createBooking(
      date_book,
      preferred_time,
      service,
      mileAge,
      book_notes,
      car._id,
      user.id,
      user.token
    );
    setLoading(false);
    if (res === "ok") {
      setDate_book("");
      setService("");
      setMileAge("");
      setPreferred_time("");
      setBook_notes("");
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
          <span>Book a Service</span>
          <span>
            {car.car_brand} {car.car_model}
          </span>
        </div>
        <form className="addBook_form"
          onSubmit={() => {
            bookingSubmit();
          }}
        >
          <div className="form-group services">
            <select
              className="form-control"
              name="service"
              id="service"
              onChange={(e) => setService(e.target.value)}
            >
              <optgroup label="Select Service">
                <option value="Body & Paint">Body & Paint</option>
                <option value="Dealer Option Service">
                  Dealer Option Service
                </option>
                <option value="Express Maintenance">Express Maintenance</option>
                <option value="General Service">General Service</option>
                <option value="Preventive Maintenance">
                  Preventive Maintenance
                </option>
                <option value="Service Campaign">Service Campaign</option>
              </optgroup>
            </select>
            <span className="select-arrow"></span>
          </div>

          <div className="form-floating flex-mileage">
            <input
              type="text"
              className="form-control mileage"
              id="floatingMileAge"
              placeholder="Mileage"
              onChange={(e) => setMileAge(e.target.value)}
            />
            <label className="label-mileage" htmlFor="floatingMileAge">
              Estimated Mileage
            </label>
          </div>

          <div className="date">
            {/* <label htmlFor="date_book" className="input-group-text">
              Preffered Date
            </label> */}
            <input
              asp-for="date_book"
              asp-format="{MM-dd-yyyy}"
              type="date"
              id="date_book"
              name="date_book"
              onChange={(e) => setDate_book(e.target.value)}
            />
          </div>

          <div className="form-group">
            <select className="form-control time" required>
              <optgroup label="Preffered Time">
                <option>09:00 AM - 10:00 AM</option>
                <option>10:00 AM - 11:00 AM</option>
                <option>11:00 AM - 12:00 PM</option>
                <option>12:00 PM - 01:00 PM</option>
                <option>01:00 PM - 02:00 PM</option>
                <option>02:00 PM - 03:00 PM</option>
                <option>03:00 PM - 04:00 PM</option>
                <option>04:00 PM - 05:00 PM</option>
                <option>05:00 PM - 06:00 PM</option>
              </optgroup>
            </select>
            <span className="select-arrow"></span>
          </div>

          <div className="form-floating">
            <textarea
              className="form-control notes"
              placeholder="Notes"
              id="floatingNotes"
              onChange={(e) => setBook_notes(e.target.value)}
            ></textarea>
            <label htmlFor="floatingNotes">Notes</label>
          </div>

          <button className="orange_btn">Book Service</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBooking;
