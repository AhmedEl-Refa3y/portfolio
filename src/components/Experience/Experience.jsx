import React from "react";
import "./Experience.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experienceData = [
  {
    id: 1,
    year: "July 24, 2024 - August 26, 2024",
    role: "Web Design Specialist Certification",
    company: "National Telecommunication Institute",
    description:
      "• Mastered the fundamentals of web design, including HTML, CSS, responsive design principles, and the Bootstrap framework.\n" +
      "• Enhanced website interactivity using JavaScript and successfully completed a hands-on web design project.",
  },
  {
    id: 2,
    year: "Jul, 2023 - Jun, 2024",
    role: "Front-End Developer (Internship)",
    company: "Code Clouders",
    description:
      "• Gained hands-on experience by working on real-world projects using HTML, CSS, JavaScript, and React, while improving skills in responsive design and debugging.\n" +
      "• Developed strong problem-solving, teamwork, and adaptability skills by collaborating with team members to contribute to project development and deliver effective solutions.",
  },
];

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="experience container section" id="resume">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="experience__timeline"
        ref={ref}
        initial="hidden"
        animate={controls}
      >
        {experienceData.map(({ id, year, role, company, description }, index) => (
          <motion.div
            className="experience__item"
            key={id}
            variants={itemVariants}
            transition={{ duration: 0.5, delay: index * 0.3 }} // Staggered delay
          >
            <div className="experience__year">{year}</div>
            <div className="experience__content">
              <h3 className="experience__role">{role}</h3>
              <p className="experience__company">{company}</p>
              <p className="experience__description" style={{ whiteSpace: "pre-line" }}>{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;