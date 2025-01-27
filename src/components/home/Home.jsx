import React from "react";
import "./Home.css";
import me from "../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      className="home container"
      id="home"
      initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
      animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
      transition={{ duration: 0.8, delay: 0.2 }} // Smooth transition with delay
    >
      <div className="intro">
        <motion.img
          src={me}
          alt=""
          className="home__img"
          style={{ borderRadius: "320px", height: "300px" }}
          initial={{ scale: 0 }} // Start with no scale
          animate={{ scale: 1 }} // Animate to full scale
          transition={{ duration: 0.8, delay: 0.4 }} // Smooth transition with delay
        />
        <motion.h1
          className="home__name"
          initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
          animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.8, delay: 0.6 }} // Smooth transition with delay
        >
          Ahmed Zakaria El-Refay
        </motion.h1>
        <motion.span
          className="home__education"
          initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
          animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.8, delay: 0.8 }} // Smooth transition with delay
        >
          I'm a Front-End Developer
        </motion.span>

        <HeaderSocials />

        <motion.a
          href="#contact"
          className="btn"
          initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
          animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.8, delay: 1 }} // Smooth transition with delay
        >
          Call Me
        </motion.a>

        <ScrollDown />
      </div>
      {/* <Shapes /> */}
    </motion.section>
  );
};

export default Home;