import React from "react";
import "./Faqs.css";

const index = () => {
  return (
    <div id="faqs" className="faqs">
      <div className="wrapper container">
        <div className="faqs-content">
          <div className="accordion accordion-flush" id="accordionFlushExample">
          <h1 className="faqs-title">FAQs</h1>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-item1">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item1"
                  aria-expanded="false"
                  aria-controls="item1"
                >
                  Do I need to make an appointment for service?
                </button>
              </h2>
              <div
                id="item1"
                className="accordion-collapse collapse"
                aria-labelledby="flush-item1"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  While booking a priority appointment online is encouraged, it
                  is not necessary - you can stop by our location in Seaside
                  Blvd, 123, Pasay, 1300 Metro Manila at your convenience!
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-item2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item2"
                  aria-expanded="false"
                  aria-controls="item2"
                >
                  My check engine light is on, what do I do?
                </button>
              </h2>
              <div
                id="item2"
                className="accordion-collapse collapse"
                aria-labelledby="flush-item2"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  If the check engine light is on but not flashing, visit any of
                  our locations and our team will perform a free diagnosis where
                  we can identify the cause of the issue (if any).
                  <br /> <br />
                  If the check engine light is blinking and/or the vehicle is
                  not functioning normally, we recommend you do not operate
                  vehicle and call us to get your vehicle towed into the nearest
                  shop for diagnosis, an estimate, and if approved - the
                  required repair(s).
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-item3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item3"
                  aria-expanded="false"
                  aria-controls="item3"
                >
                  How often should I replace my car battery?
                </button>
              </h2>
              <div
                id="item3"
                className="accordion-collapse collapse"
                aria-labelledby="flush-item3"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Car batteries ideally last between 3-5 years depending on a
                  number of factors. To ensure optimal performance and
                  maintenance, simply have your battery checked by an
                  ASE-Certified technician during every oil change - it
                  shouldn't cost you anything!
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-item4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item4"
                  aria-expanded="false"
                  aria-controls="item4"
                >
                  My car is overheating, what do I do?
                </button>
              </h2>
              <div
                id="item4"
                className="accordion-collapse collapse"
                aria-labelledby="flush-item4"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  The most common causes for vehicle overheating are related to
                  your anti-freeze and/or cooling systems. Fortunately, our
                  ASE-Certified technicians will quickly identify the problem
                  and resolve it for you.
                  <br />
                  <br />
                  In the meantime, it is best for you to turn off any air
                  conditioning and instead turn on the heater. By doing this, it
                  will help remove heat from the engine.
                  <br />
                  <br />
                  Feel free to book a priority appointment for your vehicle
                  overheating concerns here!
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-item5">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item5"
                  aria-expanded="false"
                  aria-controls="item5"
                >
                  How often should I change my oil?
                </button>
              </h2>
              <div
                id="item5"
                className="accordion-collapse collapse"
                aria-labelledby="flush-item5"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  If your vehicle uses conventional oil, you should have it
                  replaced every 3 months or 3,000 miles.
                  <br /> <br />
                  If your vehicle uses synthetic oil, you should have it
                  replaced every 6 months or 5,000 miles.
                  <br /> <br />
                  Feel free to book yourself in for an oil change here!
                </div>
              </div>
            </div>
          </div>

          <div className="image-container">
            <div className="faqs-img">
              <div className="image-content">
                <h3>Diagnostics, Repairs, & Servicing</h3>
                {/* <a href="/" className="bookBtn">
                  Book Schedule
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
