import "./ProjectCard.css";
import React, { useState, useEffect, useCallback  } from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaDatabase,
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { CloseBtn } from "../CloseBtn/CloseBtn.jsx";
import { AnimationHint } from "../../components/AnimationHint/AnimationHint";

const iconMap = {
  REACT: { icon: <FaReact />, color: "#61DBFB" },
  JAVASCRIPT: { icon: <FaJs />, color: "#F7DF1E" },
  JS: { icon: <FaJs />, color: "#F7DF1E" },
  HTML: { icon: <FaHtml5 />, color: "#E34F26" },
  CSS: { icon: <FaCss3Alt />, color: "#1572B6" },
  PHP: { icon: <FaPhp />, color: "#777BB4" },
  SQL: { icon: <FaDatabase />, color: "#4479A1" },
  TAILWIND: { icon: <RiTailwindCssFill />, color: "#38B2AC" },
};

const LeftBtn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    class="size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

const RigthBtn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    class="size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export const ProjectCard = ({
  title,
  techStack,
  images,
  isHidden,
  onSwipe,
}) => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2));
  const [isExpanded, setIsExpanded] = useState(false);
const nextSlide = useCallback(() => {
  setActiveIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
}, [images.length]);
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const [animationClass, setAnimationClass] = useState(
    "overlay-animation-open",
  );
  const handleClose = () => {
    setAnimationClass("overlay-animation-close");
    setTimeout(() => {
      setAnimationClass("overlay-animation-open");
      setIsExpanded(false);
    }, 250);
  };

  {
    /* ================================
       M O B I L E    S L I D E R
   ================================ */
  }
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      onSwipe();

      if (isLeftSwipe) nextSlide();
      else prevSlide();
    }
  };

  {
    /* ================================
       A U T O   S L I D E R
   ================================ */
  }
useEffect(() => {
  if (!isExpanded) {
    const timer = setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => clearTimeout(timer);
  }
}, [activeIndex, isExpanded, nextSlide]);

  const getCardStyle = (index) => {
    const distance = Math.abs(index - activeIndex);
    const dynamicZIndex = 10 - distance;
    const translateX = isExpanded ? "200px" : "160px";
    const scale = isExpanded ? "0.8" : "0.7";

    if (index === activeIndex) {
      return {
        transform: "translateX(0) scale(1.1) translateZ(100px)",
        zIndex: 10,
        opacity: 1,
      };
    } else if (index < activeIndex) {
      // Cards to the left (Negative translateX)
      return {
        transform: `translateX(-${translateX}) scale(${scale})`,
        zIndex: dynamicZIndex,
        opacity: 0.7,
      };
    } else {
      // Cards to the right (Positive translateX)
      return {
        transform: `translateX(${translateX}) scale(${scale})`,
        zIndex: dynamicZIndex,
        opacity: 0.7,
      };
    }
  };

  /* ================================
       I M A G E   L O A D E R
   ================================ */
  const [loadedImages, setLoadedImages] = useState({});
  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const renderIcon = () => (
    <div className="tech-stack">
      {techStack.map((tech, index) => {
        const techKey = tech.toUpperCase();
        const data = iconMap[techKey];

        return (
          <span
            key={index}
            className="tech-tag"
            title={tech}
            style={{ color: data?.color || "white" }}
          >
            {data?.icon || tech}
          </span>
        );
      })}
    </div>
  );

  const renderCarousel = () => (
    <div className="carousel-view">
      <button className="carousel-btn left" onClick={prevSlide}>
        {<LeftBtn />}
      </button>

      <div
        className="carousel-container"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            onSwipe();
            nextSlide();
          } else if (e.key === "ArrowLeft") {
            onSwipe();
            prevSlide();
          }
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`animation-container-project ${isHidden ? "hidden" : ""}`}
        >
          <AnimationHint
            size="2rem"
            animation={["slide"]}
            color="white"
            opacity="1"
          />
        </div>
        {images.map((imageObj, index) => (
          <div
            key={index}
            className={`carousel-card ${
              index === activeIndex && !isExpanded ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
            style={getCardStyle(index)}
          >
            {!loadedImages[index] && <div className="image-skeleton" />}

            <img
              src={imageObj.url}
              alt={imageObj.desc}
              onLoad={() => handleImageLoad(index)}
              onError={() => handleImageLoad(index)}
              onClick={() => {
                setActiveIndex(index);
                if (!isExpanded) setIsExpanded(true);
              }}
              style={{
                opacity: loadedImages[index] ? 1 : 0,
                transition: "opacity .3s ease",
              }}
            />
          </div>
        ))}
      </div>

      <button className="carousel-btn right" onClick={nextSlide}>
        {<RigthBtn />}
      </button>

      <div className="indicator-dots-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      {renderCarousel()}
      {renderIcon()}
      {isExpanded && (
        <div
          className="project-expanded-overlay"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className={`expanded-card ${animationClass}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-expanded-btn" onClick={handleClose}>
              <CloseBtn />
            </button>

            <div className="expanded-layout">
              <div className="expanded-left">{renderCarousel()}</div>

              <div className="expanded-right">
                <p className="image-title">
                  {images[activeIndex]?.title ||
                    "Explore the details of this project module"}
                </p>
                <p className="image-description">
                  {images[activeIndex]?.desc ||
                    "Explore the details of this project module."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
