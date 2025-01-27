import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaCode className="services__icon" />,
    title: "Web Development",
    description:
      "I build responsive, high-performance websites using modern technologies like React, Next.js, and Node.js.",
  },
  {
    id: 2,
    icon: <FaPaintBrush className="services__icon" />,
    title: "UI/UX Design",
    description:
      "I create intuitive and visually appealing designs using Figma, Adobe XD, and Framer.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>

      <div className="services__grid">
        {servicesData.map(({ id, icon, title, description }) => (
          <motion.div
            className="services__card"
            key={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="services__icon-wrapper">{icon}</div>
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;