import React from "react";
import "./Home.css";
import me from "../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import Flip from "react-reveal/Flip";

const Home = () => {
  return (
    <Flip>
      <section className="home container" id="home">
        <div className="intro">
          <img
            src={me}
            alt=""
            className="home__img"
            style={{ borderRadius: "320px", height: "300px" }}
          />
          <h1 className="home__name">Ahmed Zakaria El-Refay</h1>
          <span className="home__education">I'm a Front-End Developer</span>

          <HeaderSocials />

          <a href="#contact" className="btn">
            Call Me
          </a>

          <ScrollDown />
        </div>
        {/* <Shapes /> */}
      </section>
    </Flip>
  );
};

export default Home;
