import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import Menu from "./Menu";
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Roll from "react-reveal/Roll";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    const handleScroll = (e) => {
      e.preventDefault();
    };
    if (lightboxImage) {
      body.style.overflow = "hidden";
      body.addEventListener("scroll", handleScroll, { passive: false });
    } else {
      body.style.overflow = "auto";
      body.removeEventListener("scroll", handleScroll);
    }
    return () => {
      body.style.overflow = "auto";
      body.removeEventListener("scroll", handleScroll);
    };
  }, [lightboxImage]);

  const filterItem = (categoryItem) => {
    const updatedItems =
      categoryItem === "User"
        ? Menu
        : Menu.filter((curEle) => curEle.category === categoryItem);
    setItems(updatedItems);
  };

  const openLightbox = (imageSrc, index) => {
    setLightboxImage(imageSrc);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxIndex(0);
  };

  const goToNextImage = () => {
    const nextIndex = (lightboxIndex + 1) % items.length;
    setLightboxIndex(nextIndex);
    const currentItem = items[nextIndex];
    if (currentItem && currentItem.image) {
      setLightboxImage(currentItem.image);
    }
  };

  const goToPreviousImage = () => {
    const previousIndex = (lightboxIndex - 1 + items.length) % items.length;
    setLightboxIndex(previousIndex);
    const currentItem = items[previousIndex];
    if (currentItem && currentItem.image) {
      setLightboxImage(currentItem.image);
    }
  };

  return (
    <>
      <section className="work container section" id="work">
        <Roll>
          <h2 className="section__title">Projects</h2>
        </Roll>
        <div className="work__container grid">
          {items.map((ele, index) => {
            const { id, image, title, category, linkCode } = ele;
            return (
              <Zoom key={id}>
                <div className="work__card">
                  <div
                    className="work__thumbnail"
                    key={id}
                    onClick={() => openLightbox(image, index)}
                  >
                    <img
                      loading="lazy"
                      src={image}
                      alt=""
                      className="work__img"
                    />
                    <div className="work__mask"></div>
                  </div>
                  <div className="work__categories">
                    {category.map((cat, catIndex) => (
                      <span key={catIndex} className="work__category">
                        {cat}
                      </span>
                    ))}
                  </div>{" "}
                  <h3 className="work__title">{title}</h3>
                  <a href={linkCode} target="_blank" className="work__button">
                    <i className="icon-link work__button-icon"></i>
                  </a>
                </div>
              </Zoom>
            );
          })}
        </div>
        {lightboxImage && (
          <div
            className={lightboxImage ? "lightbox active" : "lightbox"}
            id="containerLightBox"
          >
            <button className="lightbox__control" onClick={goToPreviousImage}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img
              loading="lazy"
              src={lightboxImage}
              alt="Image"
              id="lightBoxImage"
              className="lightbox__image"
              key={lightboxIndex}
            />
            <button className="lightbox__close" onClick={closeLightbox}>
              <i className="icon-close"></i>
            </button>
            <button className="lightbox__control" onClick={goToNextImage}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Portfolio;
