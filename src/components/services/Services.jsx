import React from "react";
import "./Services.css";
import Image1 from "../assets/assets/service-1.svg";
import Image2 from "../assets/assets/service-2.svg";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Website Design",
    description:
      "I created digital products with unique ideas use Figma & Framer.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description: "I build website go live with Framer, Webflow or WordPress.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <Roll>
        <h2 className="section__title">Services</h2>
      </Roll>

      <div className="services__container grid">
        <Zoom>
          {data.map(({ id, image, title, description }) => {
            return (
              <div className="services__card" key={id}>
                <img src={image} alt="" className="services__img" />

                <h3 className="services__title">{title}</h3>

                <p className="services__description">{description}</p>
              </div>
            );
          })}
        </Zoom>
      </div>
    </section>
  );
};

export default Services;
