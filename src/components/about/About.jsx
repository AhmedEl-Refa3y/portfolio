import React from "react";
import "./About.css";
import me from "../assets/me.jpg";
import { motion } from "framer-motion";
import AboutBox from "./AboutBox";
import reactAnimation from "../assets/react-animation.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <section className="about container section" id="about">
      {/* Title */}
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="about__container grid">
        {/* Image */}
        {/* <motion.img
          loading="lazy"
          src={me}
          alt=""
          className="about__img"
          style={{ borderRadius: "320px", height: "200px" }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        /> */}

        <motion.div
          className="skills__image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Lottie
            animationData={reactAnimation}
            loop={true}
            style={{ height: "300px" }} // Adjust height as needed
          />
        </motion.div>


        {/* About Data */}
        <motion.div
          className="about__data grid"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="about__info">
            <p className="about__description" style={{ marginBottom: "20px" }}>
              Experienced Frontend Developer skilled in creating responsive and
              intuitive web interfaces. Proficient in modern frameworks like
              React, with a focus on delivering high-quality projects
              efficiently. A collaborative team player dedicated to continuous
              learning and staying ahead of industry trends and innovations.
            </p>
            <motion.a
              href="cv.pdf"
              className="btn"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="icon-envelope"></i>Download CV
            </motion.a>
          </div>

          {/* Skills */}
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React JS</h3>
                <span className="skills__number">80%</span>
              </div>
              <motion.div
                className="skills__bar"
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="skills__percentage development"></span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>



      {/* <AboutBox/> */}
    </section>
  );
};

export default About;
