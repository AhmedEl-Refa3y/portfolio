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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <BallLoader />
      ) : (
        <>
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
