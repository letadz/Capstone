import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Company.css";

import Logo1 from "../../images/company-brands/bridgestone.png";
import Logo2 from "../../images/company-brands/yokohama.png";
import Logo3 from "../../images/company-brands/sailun.png";
import Logo4 from "../../images/company-brands/caltex.png";
import Logo5 from "../../images/company-brands/motul.png";

const Company = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div className="company">
      <div className="company-section">
        {/* <h1 className="company-title">Partners</h1> */}
        <div className="slider-bg container">
          <Slider {...settings} className="slider">
            <div>
              <img src={Logo1} alt="" />
            </div>
            <div>
              <img src={Logo2} alt="" />
            </div>
            <div>
              <img src={Logo3} alt="" />
            </div>
            <div>
              <img src={Logo4} alt="" />
            </div>
            <div>
              <img src={Logo5} alt="" />
            </div>
            <div>
              <img src={Logo1} alt="" />
            </div>
            <div>
              <img src={Logo2} alt="" />
            </div>
            <div>
              <img src={Logo3} alt="" />
            </div>
            <div>
              <img src={Logo4} alt="" />
            </div>
            <div>
              <img src={Logo5} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Company;
