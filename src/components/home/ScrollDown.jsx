import React from "react";

const ScrollDown = () => {
  return (
    <div className="scroll_down">
      <a href="#about" className="mouse__wrapper">
        <a href="#about" className="go-down">
          <i className="fas fa-angle-double-down fa-2x"></i>
        </a>
        {/* <span className="home__scroll-name">Scroll Down</span>
        <span className="mouse">
          <span className="wheel"></span>
        </span> */}
      </a>
    </div>
  );
};

export default ScrollDown;
