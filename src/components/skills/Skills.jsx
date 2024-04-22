import React, { useState } from "react";
import "./Skills.css";
import htmlLogo from "../assets/assets/html-logo.svg";
import cssLogo from "../assets/assets/css-logo.svg";
import javascriptLogo from "../assets/assets/javascript-logo.svg";
import bootstrapLogo from "../assets/assets/bootstrap-logo.svg";
import reactLogo from "../assets/assets/react-icon.svg";
import sassLogo from "../assets/assets/sass-icon.svg";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";

const Application = () => {
  return (
    <section className="skills container" id="skills">
      <Roll>
        <h2 className="skills__title section__title">Skills</h2>
      </Roll>

      <div className="wrapper">
        <div className="image-container">
          <Zoom delay={500}>
            <div className="logo">
              <img src={htmlLogo} alt="HTML Logo" className="image" />
              HTML
            </div>
          </Zoom>
          <Zoom delay={700}>
            <div className="logo">
              <img src={cssLogo} alt="CSS Logo" className="image" />
              CSS
            </div>
          </Zoom>
          <Zoom delay={900}>
            <div className="logo">
              <img
                src={javascriptLogo}
                alt="JavaScript Logo"
                className="image"
              />
              JS
            </div>
          </Zoom>
          <Zoom delay={1100}>
            <div className="logo">
              <img src={bootstrapLogo} alt="Bootstrap Logo" className="image" />
              Bootstrap
            </div>
          </Zoom>
          <Zoom delay={1300}>
            <div className="logo">
              <img src={sassLogo} alt="sass Logo" className="image" />
              Sass
            </div>
          </Zoom>
          <Zoom delay={1500}>
            <div className="logo">
              <img src={reactLogo} alt="React Logo" className="image" />
              React JS
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Application;
