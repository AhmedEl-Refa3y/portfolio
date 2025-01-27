import React from "react";
import "./Skills.css";
import htmlLogo from "../assets/skills/html-logo.svg";
import cssLogo from "../assets/skills/css-logo.svg";
import javascriptLogo from "../assets/skills/javascript-logo.svg";
import bootstrapLogo from "../assets/skills/bootstrap-logo.svg";
import reactLogo from "../assets/skills/react-icon.svg";
import sassLogo from "../assets/skills/sass-icon.svg";
import reduxLogo from "../assets/skills/redux-icon.svg";
import typescriptLogo from "../assets/skills/icons-typescript.svg";
import pythonLogo from "../assets/skills/icon-python.svg";
import cLogo from "../assets/skills/c++-icon.svg";
import gitLogo from "../assets/skills/icons-git.svg";
import gitHubLogo from "../assets/skills/icons-github.svg";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: javascriptLogo },
    { name: "Bootstrap", logo: bootstrapLogo },
    { name: "Sass", logo: sassLogo },
    { name: "React JS", logo: reactLogo },
    { name: "Redux", logo: reduxLogo },
    { name: "TypeScript", logo: typescriptLogo },
    { name: "Python", logo: pythonLogo },
    { name: "C++", logo: cLogo },
    { name: "Git", logo: gitLogo },
    { name: "Github", logo: gitHubLogo },
  ];

  return (
    <section className="skills container" id="skills">
      <div className="skills__wrapper">
        {/* Skills Section */}
        <div className="skills__list">
          <motion.h2
            className="section__title"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>

          <motion.div
            className="skills__grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="logo"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} Logo`}
                  className="image"
                  loading="lazy"
                />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;