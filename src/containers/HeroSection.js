import React from "react";
import BannerSlider from "../components/BannerSlider";
import tentwenty from "../../public/assets/tentwenty.jpeg";
import factory from "../../public/assets/factory.jpg";
import products from "../../public/assets/products.jpeg";
import process from "../../public/assets/process.jpg";

const HeroSection = () => {
  const slides = [
    {
      url: `${tentwenty}`,
      title: "From our Farms to your hands",
      slogan: "Welcome To TenTwenty Farm",
    },
    {
      url: `${factory}`,
      title: "Mass production with the best quality",
      slogan: "Welcome To TenTwenty Farm",
    },
    {
      url: `${products}`,
      title: "Organic to you and your family",
      slogan: "Welcome To TenTwenty Farm",
    },
    {
      url: `${process}`,
      title: "How it works",
      slogan: "Welcome To TenTwenty Farm",
    },
  ];

  const SectionStyle = {
    width: "100%",
    height: "900px",
    margin: "0 auto",
  };

  return (
    <div style={SectionStyle}>
      <BannerSlider slides={slides}></BannerSlider>
    </div>
  );
};

export default HeroSection;
