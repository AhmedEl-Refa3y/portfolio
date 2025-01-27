import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Portfolio.css";
import comforty from "../assets/projects/comforty.png";
import tasks from "../assets/projects/daily-task.png";
import hooBank from "../assets/projects/hooBank.png";
import nativeEcommerce from "../assets/projects/native-e-commerce.png";
import weatherApp from "../assets/projects/weather-app.png";
import wepStore from "../assets/projects/wep_store.png";
import adminDashboard from "../assets/projects/admin-dashboard.png";

const projects = [
  {
    title: "Comforty",
    category: "HTML & CSS",
    description:
      "Comforty is a well-structured, visually appealing e-commerce template suitable for furniture stores or any home decor business. It combines modern design with essential e-commerce functionalities, making it a great starting point for building an online store.",
    image: comforty,
    demoLink: "https://ahmedel-refa3y.github.io/depi-comforty/",
    codeLink: "https://github.com/AhmedEl-Refa3y/depi-comforty",
  },
  {
    title: "Daily Task",
    category: "JavaScript",
    description:
      "The Daily Task Manager is a simple, user-friendly web app for organizing daily tasks. Users can add tasks with deadlines, mark them as completed, delete them, and track task history. It features a clean design, local storage for task persistence, and a responsive interface.",
    image: tasks,
    demoLink: "https://ahmedel-refa3y.github.io/to-do-list/",
    codeLink: "https://github.com/AhmedEl-Refa3y/to-do-list",
  },
  {
    title: "hooBank",
    category: "HTML & CSS",
    description:
      "HooBank is a sleek financial services website with a dark theme, offering credit card solutions, business tools, and app integrations. Built with **Bootstrap** and **Font Awesome**, it provides a professional, user-friendly experience.",
    image: hooBank,
    demoLink: "https://ahmedel-refa3y.github.io/depi-hooBank/",
    codeLink: "https://github.com/AhmedEl-Refa3y/depi-hooBank",
  },
  {
    title: "Weather App",
    category: "JavaScript",
    description:
      "A weather app that fetches real-time data using OpenWeatherMap API. Users can search for cities, view temperature, humidity, and wind speed, with autocomplete suggestions. Features a clean, animated UI with a responsive card layout.",
    image: weatherApp,
    demoLink: "https://ahmedel-refa3y.github.io/weather-app/",
    codeLink: "https://github.com/AhmedEl-Refa3y/weather-app",
  },
  {
    title: "native E-Commerce",
    category: "HTML & CSS",
    description:
      "An e-commerce site with shopping, blog, about, contact, and cart pages. It’s responsive, features product listings, promotional banners, and a newsletter. Includes a shopping cart, contact form with a map, and blog. Modern and mobile-friendly.",
    image: nativeEcommerce,
    demoLink: "https://ahmedel-refa3y.github.io/native_ecommerce/",
    codeLink: "https://github.com/AhmedEl-Refa3y/native_ecommerce",
  },
  {
    title: "E-Commerce",
    category: "React",
    description:
      "The images feature multilingual product and company details, with repeated phrases and technical specs. The `package.json` describes a React e-commerce project with various dependencies and GitHub Pages deployment setup.",
    image: wepStore,
    demoLink: "https://ahmedel-refa3y.github.io/e-commerce-website/",
    codeLink: "https://github.com/AhmedEl-Refa3y/e-commerce-website",
  },
  {
    title: "Admin Dashboard",
    category: "React",
    description:
      "The `package.json` outlines a React-based admin dashboard project using Material-UI and Recharts, configured for deployment to GitHub Pages. It includes dependencies for UI components, routing, and data visualization.",
    image: adminDashboard,
    demoLink: "https://ahmedel-refa3y.github.io/Admin-Dashboard/",
    codeLink: "https://github.com/AhmedEl-Refa3y/Admin-Dashboard",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="portfolio-container" id="portfolio">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
    <div className="projects-container">
      <aside className="filters">
        {["All Projects", "HTML & CSS", "JavaScript", "React"].map((filter) => (
          <button
            key={filter}
            className={`filter-button ${
              activeFilter === filter ? "active" : ""
            }`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </aside>
      <motion.div layout className="projects">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <img src={project.image} alt={project.title} />
              <div className="" style={{ padding: "10px" }}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-links">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-link"></i>
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-code"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
    </div>
  );
};

export default Portfolio;
