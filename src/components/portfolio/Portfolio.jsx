import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import Menu from "./Menu";
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

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
    const updatedItems = Menu.filter((curEle) => {
      return curEle.category === categoryItem;
    });
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
    const nextIndex = (lightboxIndex + 1) % items.length; // Calculate the index of the next image
    setLightboxIndex(nextIndex);
    const currentItem = items[nextIndex];
    if (currentItem && currentItem.image) {
      setLightboxImage(currentItem.image);
    }

    // lightBox.classList.remove("active");

    // $(".lightbox__image").click(function () {
    //   addClass("active");
    // });
    // const currentItem = items[lightboxIndex];
    // if (currentItem && currentItem.images) {
    //   const nextIndex = (lightboxIndex + 1) % currentItem.images.length;
    //   setLightboxIndex(nextIndex);
    //   setLightboxImage(currentItem.images[nextIndex]);
    // }
  };

  const goToPreviousImage = () => {
    const previousIndex = (lightboxIndex - 1 + items.length) % items.length; // Calculate the index of the previous image
    setLightboxIndex(previousIndex);
    const currentItem = items[previousIndex];
    if (currentItem && currentItem.image) {
      setLightboxImage(currentItem.image);
    }
  };

  return (
    <>
      <section className="work container section" id="work">
        <Zoom>
          <h2 className="section__title">Recent Work</h2>
        </Zoom>
        <div className="work__container grid">
          {items.map((ele, index) => {
            const { id, image, title, category, images } = ele;
            return (
              <Zoom key={id}>
                <div className="work__card">
                  <div
                    className="work__thumbnail"
                    key={id}
                    onClick={() => openLightbox(image, index)}
                  >
                    <img src={image} alt="" className="work__img" />
                    <div className="work__mask"></div>
                  </div>
                  <span className="work__category">{category}</span>
                  <h3 className="work__title">{title}</h3>
                  <a href="#" className="work__button">
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
