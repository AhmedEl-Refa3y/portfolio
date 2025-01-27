import React, { useState } from "react";
import "./Sidebar.css";
import navLogo from "../assets/navLogo.png";
import { Zoom } from "react-reveal";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <Zoom delay={500}>
          <a href="#home" className="nav__logo">
            <img src={navLogo} alt="" />
          </a>
        </Zoom>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <Zoom delay={500}>
                <li className="nav__item">
                  <a href="#home" className="nav__link ">
                    <span>Home</span>
                    <i className="icon-home"></i>
                  </a>
                </li>
              </Zoom>

              <Zoom delay={700}>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    <span>About</span>
                    <i className="icon-user"></i>
                  </a>
                </li>
              </Zoom>

              <Zoom delay={900}>
                <li className="nav__item">
                  <a href="#services" className="nav__link">
                    <span>Services</span>
                    <i className="icon-briefcase"></i>
                  </a>
                </li>
              </Zoom>

              <Zoom delay={1100}>
                <li className="nav__item">
                  <a href="#resume" className="nav__link">
                    <span>Experience</span>
                    <i className="icon-graduation"></i>
                  </a>
                </li>
              </Zoom>

              <Zoom delay={1300}>
                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    <span>Skills</span>
                    <i className="icon-grid"></i>
                  </a>
                </li>
              </Zoom>

              <Zoom delay={1500}>
                <li className="nav__item">
                  <a href="#portfolio" className="nav__link">
                    <span>Portfolio</span>
                    <i className="icon-layers"></i>
                  </a>
                </li>
              </Zoom>

              {/* <li className="nav__item">
              <a href="#blog" className="nav__link">
                <span>Blog</span>
                <i className="icon-note"></i>
              </a>
            </li> */}

              <Zoom delay={1700}>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    <span>Contact</span>
                    <i className="icon-bubble"></i>
                  </a>
                </li>
              </Zoom>
            </ul>
          </div>
        </nav>

        {/* <div className="nav__footer">
        <span className="copyright">&coby; 2023 </span>
      </div> */}
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
