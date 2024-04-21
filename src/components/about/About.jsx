import React from "react";
import "./About.css";
// import avatar2 from '../assets/assets/avatar2.svg';
import me from "../assets/me.jpg";
// import AboutBox from './AboutBox';
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <section className="about container section" id="about">
      <Zoom>
        <h2 className="section__title">About Me</h2>
      </Zoom>
      <div className="about__container grid">
        <Zoom delay={500}>
          <img
            src={me}
            alt=""
            className="about__img"
            style={{ borderRadius: "320px", height: "200px" }}
          />
        </Zoom>

        <Zoom delay={700}>
          <div className="about__data grid">
            <div className="about__info">
              <p
                className="about__description"
                style={{ marginBottom: "20px" }}
              >
                I am Ahmed Zakaria, web developer from Mansoura, Egypt. I have
                rich experience in web site design and building and
                customization.
              </p>
              <a href="cv.pdf" className="btn" download>
                <i className="icon-envelope"></i>Download CV
              </a>
            </div>
            <div className="about__skills grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React JS</h3>
                  <span className="skills__number ">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage development"></span>
                </div>
              </div>

              {/* <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">UI/UX design</h3>
                  <span className="skills__number ">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage ui__design"></span>
                </div>
              </div> */}

              {/* <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Photography</h3>
                  <span className="skills__number ">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage photography"></span>
                </div>
              </div> */}
            </div>
          </div>
        </Zoom>
      </div>

      {/* <AboutBox/> */}
    </section>
  );
};

export default About;
