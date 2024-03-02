import React from "react";
import HeroSection from "./containers/HeroSection";
import QualitySection from "./containers/QualitySection";
import SwiperSection from "./containers/swiperSection";
import "./index.css";

const App = () => {
  return (
    <div>
      <HeroSection />;
      <QualitySection />;
      <SwiperSection />;
    </div>
  );
};

export default App;
