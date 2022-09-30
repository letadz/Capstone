import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";
import ModalTestimonial from "../subComponents/modal-testimonial/ModalTestimonial";
import ModalLogin from "../subComponents/modal-login/ModalLogin";

const colors = {
  orange: "#f5d10d",
  grey: "#181818",
};

const Testimonials = () => {
  const stars = Array(5).fill(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div id="testimonials" className="testimonials">
      <h1 className="testimonials-title">Testimonials</h1>
      <div className="cards container">
        <div className="row">
          <Slider {...settings} className="slider">
            <div className="cardBody p-3">
              <div style={ratingStar.container}>
                <div style={ratingStar.stars}>
                  {stars.map((_, index) => {
                    return <FaStar key={index} color={colors.orange} />;
                  })}
                </div>
              </div>
              <h5 className="card-username py-3">John Doe</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                ultrices magna at tristique lobortis. Aliquam vel ex ac ex
                malesuada viverra. Sed euismod nisl et pellentesque maximus.
              </p>
            </div>
            <div className="cardBody p-3">
              <div style={ratingStar.container}>
                <div style={ratingStar.stars}>
                  {stars.map((_, index) => {
                    return <FaStar key={index} color={colors.orange} />;
                  })}
                </div>
              </div>
              <h5 className="card-username py-3">Jane Doe</h5>
              <p className="card-text">
                Sed eleifend, felis vel posuere lobortis, erat nisi malesuada
                sapien, in dictum velit lorem nec turpis. Suspendisse sodales
                neque eget euismod faucibus. Phasellus bibendum pellentesque
                pretium.
              </p>
            </div>

            <div className="cardBody p-3">
              <div style={ratingStar.container}>
                <div style={ratingStar.stars}>
                  {stars.map((_, index) => {
                    return <FaStar key={index} color={colors.orange} />;
                  })}
                </div>
              </div>
              <h5 className="card-username py-3">John Smith</h5>
              <p className="card-text">
                Nunc ultricies erat arcu, vel laoreet dolor cursus vitae. Nullam
                quis pharetra sapien. Nam erat nulla, suscipit ac euismod a,
                pharetra non nulla. Curabitur bibendum sapien velit.
              </p>
            </div>

            <div className="cardBody p-3">
              <div style={ratingStar.container}>
                <div style={ratingStar.stars}>
                  {stars.map((_, index) => {
                    return <FaStar key={index} color={colors.orange} />;
                  })}
                </div>
              </div>
              <h5 className="card-username py-3">Mark Smith</h5>
              <p className="card-text">
                Nunc ultricies erat arcu, vel laoreet dolor cursus vitae. Nullam
                quis pharetra sapien. Nam erat nulla, suscipit ac euismod a,
                pharetra non nulla. Curabitur bibendum sapien velit.
              </p>
            </div>
          </Slider>
        </div>
      </div>

      {/* Button review */}
      <div className="container-btn container d-block">
        <button
          type="button"
          className="review-btn"
          data-bs-toggle="modal"
          data-bs-target="#review"
        >
          Leave a Review
        </button>

        <button
          type="button"
          className="btn-schedule"
          data-bs-toggle="modal"
          data-bs-target="#schedule"
        >
          <span>Book Schedule</span>
        </button>
      </div>

      {/* Modal */}
      <ModalTestimonial />
      {/* <ModalLogin /> */}
    </div>
  );
};

const ratingStar = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "start",
  },
};

export default Testimonials;
