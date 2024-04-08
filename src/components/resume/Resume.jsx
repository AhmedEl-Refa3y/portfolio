import React from "react";
import "./Resume.css";
import Data from "./Data";
import Card from "./Card";
import Zoom from "react-reveal/Zoom";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <Zoom>
        <h2 className="section__title">Experience</h2>
      </Zoom>
      <div className="resume__container grid">
        {/* <div className="education">
          <Zoom>
            <div className="timeline grid">
              <div className="timeline__item">
                <i className="icon-graduation"></i>
                <span className="timeline__date">2019 - present</span>
                <h3 className="timeline__title">Academic Degree</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                  admodum perfecto.
                </p>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="timeline grid">
              <div className="timeline__item">
                <i className="icon-graduation"></i>
                <span className="timeline__date">2013 - 2017</span>
                <h3 className="timeline__title">Bachelor's Degree</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                  admodum perfecto.
                </p>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="timeline grid">
              <div className="timeline__item">
                <i className="icon-graduation"></i>
                <span className="timeline__date">2009 - 2013</span>
                <h3 className="timeline__title">Honours Degree</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                  admodum perfecto.
                </p>
              </div>
            </div>
          </Zoom>
        </div> */}

        <div className="experience">
          <Zoom>
            <div className="timeline grid">
              <div className="timeline__item">
                <i className="icon-briefcase"></i>
                <span className="timeline__date">July 2023 - July 2024</span>
                <h3 className="timeline__title">Front-End Developer</h3>
                <p className="timeline__text">
                  Traning at Code Clouders Company
                </p>
              </div>
            </div>
          </Zoom>
          {/* <Zoom>
            <div className="timeline grid">
              <div className="timeline__item">
                <i className="icon-briefcase"></i>
                <span className="timeline__date">2013 - 2017</span>
                <h3 className="timeline__title">Front-End Developer</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                  admodum perfecto.
                </p>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="timeline grid">
              <div className="timeline__item">
                <i className="icon-briefcase"></i>
                <span className="timeline__date">2009 - 2013</span>
                <h3 className="timeline__title">Back-End Developer</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                  admodum perfecto.
                </p>
              </div>
            </div>
          </Zoom> */}
        </div>
      </div>
    </section>
  );
};

export default Resume;
