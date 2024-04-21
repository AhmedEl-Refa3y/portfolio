import React, { useState } from "react";
import "./Skills.css";
import htmlLogo from "../assets/assets/html-logo.svg";
import cssLogo from "../assets/assets/css-logo.svg";
import javascriptLogo from "../assets/assets/javascript-logo.svg";
import bootstrapLogo from "../assets/assets/bootstrap-logo.svg";
import reactLogo from "../assets/assets/react-icon.svg";
import sassLogo from "../assets/assets/sass-icon.svg";
import Zoom from "react-reveal/Zoom";

const Application = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const container = document.querySelector(".image-container");
    const scrollAmount = (container.clientWidth / 2) * direction;
    const newPos = container.scrollLeft + scrollAmount;
    container.scrollTo({
      left: newPos,
      behavior: "smooth",
    });
    setScrollPosition(newPos);
  };

  return (
    <section className="skills container" id="skills">
      <Zoom>
        <h2 className="skills__title section__title">Skills</h2>
      </Zoom>

      <div className="wrapper">
        <a className="prev" onClick={() => scroll(-1)}>
          &#10094;
        </a>
        <div className="image-container">
          <Zoom>
            <img src={htmlLogo} alt="HTML Logo" className="image" />
          </Zoom>
          <Zoom>
            <img src={cssLogo} alt="CSS Logo" className="image" />
          </Zoom>
          <Zoom>
            <img src={javascriptLogo} alt="JavaScript Logo" className="image" />
          </Zoom>
          <Zoom>
            <img src={bootstrapLogo} alt="Bootstrap Logo" className="image" />
          </Zoom>
          <Zoom>
            <img src={sassLogo} alt="sass Logo" className="image" />
          </Zoom>
          <Zoom>
            <img src={reactLogo} alt="React Logo" className="image" />
          </Zoom>
        </div>
        <a className="next" onClick={() => scroll(1)}>
          &#10095;
        </a>
      </div>
    </section>
  );
};

export default Application;
