import React from "react";

const ScrollTop = () => {
  return (
    <div className="scroll_top">
      <a href="#home" className="mouse__wrapper">
        <a href="#home" className="go-top">
          <i className="fas fa-angle-double-down fa-2x"></i>
        </a>
      </a>
    </div>
  );
};

export default ScrollTop;
