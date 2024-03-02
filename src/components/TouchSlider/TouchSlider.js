import React, { useEffect, useRef } from "react";
import "./TouchSlider.css";

const TouchSlider = ({ clients }) => {
  const sliderRef = useRef();

  const setItemSlope = () => {
    const slider = sliderRef.current;
    const items = Array.from(slider.querySelectorAll(".slider-item"));
    const sliderWidth = slider.offsetWidth;
    const sliderCenter = slider.scrollLeft + sliderWidth / 2;

    items.forEach((item) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      if (
        itemCenter >= sliderCenter - item.offsetWidth / 2 &&
        itemCenter <= sliderCenter + item.offsetWidth / 2
      ) {
        item.style.transform = "perspective(1000px) rotateZ(0deg)";
      } else if (itemCenter < sliderCenter) {
        item.style.transform = "perspective(1000px) rotateZ(-20deg)";
      } else {
        item.style.transform = "perspective(1000px) rotateZ(20deg)";
      }
    });
  };

  useEffect(() => {
    setItemSlope();
    window.addEventListener("resize", setItemSlope);
    return () => {
      window.removeEventListener("resize", setItemSlope);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("scroll", setItemSlope);
    return () => {
      slider.removeEventListener("scroll", setItemSlope);
    };
  }, []);

  return (
    <div className="slider-container">
      <ul className="slider" ref={sliderRef}>
        {clients.map((client, index) => (
          <li key={index} className="slider-item">
            <div className="image-container">
              <img src={client.url} alt={client.title} />
            </div>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              {client.title}
            </p>
            <p style={{ fontSize: "20px" }}>{client.Address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TouchSlider;
