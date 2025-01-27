import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import BallLoader from "./components/bouncing/BallLoader";
import Bubble from "./components/bubble/Bubble";

function App() {
  const [loading, setLoading] = useState(true);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show arrow if scrolled down 300px
      setShowArrow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <Experience />
            <Skills />
            <Portfolio />
            <Contact />
          </main>
          {showArrow && (
            <div className="back-to-top" onClick={scrollToTop}>
              ↑
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
