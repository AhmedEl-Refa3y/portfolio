import React from "react";
import { motion } from "framer-motion";

const AboutBox = () => {
  return (
    <motion.div
      className="about__boxes grid"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="about__box"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">198</h3>
          <span className="about__subtitle">Project Completed</span>
        </div>
      </motion.div>

      <motion.div
        className="about__box"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__title">5670</h3>
          <span className="about__subtitle">Cup Of Coffee</span>
        </div>
      </motion.div>

      <motion.div
        className="about__box"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title">427</h3>
          <span className="about__subtitle">Satisfied Clients</span>
        </div>
      </motion.div>

      <motion.div
        className="about__box"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="about__icon icon-badge"></i>
        <div>
          <h3 className="about__title">35</h3>
          <span className="about__subtitle">Nominees Winner</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutBox;