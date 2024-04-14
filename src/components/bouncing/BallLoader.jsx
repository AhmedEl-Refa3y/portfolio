// BallLoader.jsx

import React from "react";
import "./BallLoader.css";

const BallLoader = () => {
  return (
    <div className="ball-loader">
      <div className="ball top"></div>
      <div className="ball middle"></div>
      <div className="ball bottom"></div>
      <div className="ball extra"></div>
    </div>
  );
};

export default BallLoader;
