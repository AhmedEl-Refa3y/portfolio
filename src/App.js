import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
// import Pricing from "./components/pricing/Pricing";
// import Testimonials from "./components/testimonials/Testimonials";
// import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import BallLoader from "./components/bouncing/BallLoader";
import Bubble from "./components/bubble/Bubble";

function App() {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".nav__link");
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector(".nav__link[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <BallLoader />
      ) : (
        <>
          <Bubble />
          <Sidebar />
          <main className="main">
            <Home />
            <About />
            <Services />
            <Resume />
            <Skills />
            <Portfolio />
            <Contact />
          </main>
        </>
      )}{" "}
    </>
  );
}

export default App;
