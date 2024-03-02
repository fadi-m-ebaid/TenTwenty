import React from "react";

const Counter = ({ currentIndex, total }) => {

  const formattedCurrentIndex = String(currentIndex + 1).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");

  const counterStyle = {
    color: "#EEF4F9",
    fontSizw: "16px",
    display: "flex", 
    alignItems: "center", 
    width: "49%",
  };

  const lineStyle = {
    borderTop: "1px solid #EEF4F9", 
    flexGrow: 1, 
    margin: "0 17px", 
  };

  return (
    <div style={counterStyle}>
      <span>{formattedCurrentIndex}</span>
      <div style={lineStyle} /> 
      <span>{formattedTotal}</span>
    </div>
  );
};

export default Counter;
