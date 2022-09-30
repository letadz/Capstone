import React, { useState, useEffect } from "react";
import ArrowBtn from "../../../images/other-logo/up-arrow.png";
import "./ScrollToTop.css";



const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);


  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTopButton && (
        <img src={ArrowBtn} alt="arrow" draggable="false" className="arrow-btn" onClick={scrollUp} />
      )}
    </div>
  );
};

export default ScrollToTop;
