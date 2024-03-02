import React, { useCallback, useState, useRef, useEffect } from "react";
import Navbar from "./NavBar";
import ThumbNail from "./ThumbNail";

const BannerSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeRef = useRef(null);

  const SliderStyle = {
    height: "100%",
    position: "relative",
    overflow: "hidden",
  };

  const backgroundImageStyle = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex].url})`,
    padding: "20px",
    transition: "opacity 1s ease-in-out",
    opacity: isTransitioning ? 0 : 1,
    position: "absolute", 
    top: 0,
    left: 0,
    zIndex: 1, 
  };

  const contentStyle = {
    position: "relative",
    height: "100%",
    zIndex: 2, 
  };

  const textStyle = {
    position: "absolute",
    color: "white",
    height: "176px",
    top: "35%",
    left: "10.5%",
    maxWidth: "756px",
  };

  const loopTheSlides = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
      setIsTransitioning(false);
    }, 1000);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      loopTheSlides();
    }, 3000);
    return () => clearTimeout(timeRef.current);
  }, [loopTheSlides]);

  return (
    <div style={SliderStyle}>
      <div style={backgroundImageStyle}></div>
      <div style={contentStyle}>
        <Navbar />
        <div style={textStyle}>
          <p style={{ fontSize: "16px" }}>{slides[currentIndex].slogan}</p>
          <span style={{ fontSize: "64px" }}>{slides[currentIndex].title}</span>
        </div>
        <ThumbNail
          slides={slides}
          onClick={loopTheSlides}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default BannerSlider;
