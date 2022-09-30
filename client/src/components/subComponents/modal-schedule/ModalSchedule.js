import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "./ModalSchedule.css";

const ModalSchedule = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="modal-schedule">
      <div className="modal fade text-center" id="schedule" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="schedule-label">
                Book Schedule
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form className="schedule-form">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control name"
                    id="floatingName"
                    placeholder="Name"
                    required
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>

                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control phone"
                    id="floatingPhone"
                    placeholder="Phone"
                    required
                  />
                  <label htmlFor="floatingPhone">Phone</label>
                </div>

                <div className="form-floating flex-location">
                  <input
                    type="text"
                    className="form-control location"
                    id="floatingLocation"
                    placeholder="Location"
                    required
                  />
                  <label htmlFor="floatingLocation">Location</label>
                </div>

                <div className="form-floating">
                  <textarea
                    className="form-control message"
                    placeholder="Message"
                    id="floatingTextarea"
                    required
                  ></textarea>
                  <label htmlFor="floatingTextarea">Message</label>
                </div>

                <div className="grid-container">
                  <div className="form-floating flex-mileage">
                    <input
                      type="text"
                      className="form-control mileage"
                      id="floatingMileAge"
                      placeholder="Mileage"
                      required
                    />
                    <label className="label-mileage" htmlFor="floatingMileAge">
                      Estimated Mileage
                    </label>
                  </div>

                  <div className="form-group services">
                    <select className="form-control" required>
                      <optgroup label="Services">
                        <option>Engine Repair</option>
                        <option>Exterior Body Services</option>
                        <option>Auto Body Restoration</option>
                        <option>Collision Repair</option>
                        <option>Glass Repair</option>
                        <option>Dent Repair</option>
                        <option>Frame Straightening</option>
                        <option>Hail Damage Repair</option>
                        <option>Rust Repair</option>
                        <option>Car Repair Services</option>
                        <option>Transmission Repair</option>
                        <option>Muffler & Exhaust Services</option>
                      </optgroup>
                    </select>
                    <span className="select-arrow"></span>
                  </div>

                  <div className="form-date">
                    <DatePicker onChange={setDate} value={date} />
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
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn-submit">
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSchedule;
