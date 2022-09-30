import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./ModalTestimonial.css";

const colors = {
  orange: "#f5d10d",
  grey: "#181818",
};

const ModalTestimonial = () => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="modal-testimonials">
      <div className="modal fade text-center" id="review" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="reviewLabel">
                Leave a Review
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <div style={styles.container}>
                  <div className="star" style={styles.stars}>
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={32}
                          style={{
                            marginRight: 10,
                            cursor: "pointer",
                          }}
                          color={
                            (hoverValue || currentValue) > index
                              ? colors.orange
                              : colors.grey
                          }
                          onClick={() => handleClick(index + 1)}
                          onMouseOver={() => handleMouseOver(index + 1)}
                          onMouseLeave={handleMouseLeave}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control testimonial-message"
                    placeholder="Message"
                    id="floatingTextarea"
                    required
                  ></textarea>
                  <label htmlFor="floatingTextarea">Message</label>
                </div>

                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control testimonial-name"
                    id="floatingName"
                    placeholder="Name"
                    required
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>

                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control testimonial-phone"
                    id="floatingPhone"
                    placeholder="Phone"
                    required
                  />
                  <label htmlFor="floatingPhone">Phone</label>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn-submit">
                Submit Review
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem 0",
  },
};

export default ModalTestimonial;
