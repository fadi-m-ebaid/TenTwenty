import React, { useEffect, useState } from "react";
import Counter from "./Counter";

const ThumbNail = ({ slides, onClick, currentIndex }) => {
  const [resetAnimation, setResetAnimation] = useState(false);

  
  const nextIndex = (currentIndex + 1) % slides.length;

  const sectionStyle = {
    position: "absolute",
    top: "75%",
    left: "10.5%",
    display: "inline-flex",
    justifyContent: "space-between",
    width: "23.9%",
  };

  
  const btnDivStyle = {
    position: "relative",
    width: "93px",
    height: "93px",
    margin: "22px",
    padding: "5px",
    boxSizing: "border-box",
    animation: resetAnimation ? "none" : "border-anim 5s linear infinite",
    zIndex: 2,
  };


  const buttonStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${slides[nextIndex].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    outline: "none",
    position: "relative",
    zIndex: 3,
  };

  const handleButtonClick = () => {
    if (onClick) onClick();
    // Reset animation
    setResetAnimation(true);
    setTimeout(() => setResetAnimation(false), 50);
  };

  useEffect(() => {

    setResetAnimation(true);
    setTimeout(() => setResetAnimation(false), 50);
  }, [currentIndex]);

  return (
    <>
      <style>
        {`
          @keyframes border-anim {
            0%, 100% { border-color: transparent; }
            25% { border-color: white transparent transparent transparent; }
            50% { border-color: white white transparent transparent; }
            75% { border-color: white white white transparent; }
            100% { border-color: white; }
          }
          .btnDivStyle::after {
            content: '';
            position: absolute;
            top: -10px; right: -10px;
            bottom: -10px; left: -10px;
            border: 5px solid transparent;
            animation: inherit;
            pointer-events: none; // Allows click events to pass through to the button
            z-index: 1; // Ensures that this pseudo-element is below the button
          }
        `}
      </style>
      <div style={sectionStyle}>
        <div
          style={btnDivStyle}
          className="btnDivStyle"
          onAnimationEnd={() => setResetAnimation(false)}
        >
          <button style={buttonStyle} onClick={handleButtonClick}>
            Next
          </button>
        </div>
        <Counter currentIndex={currentIndex} total={slides.length}></Counter>
      </div>
    </>
  );
};

export default ThumbNail;
