import React from "react";
import TouchSlider from "../components/TouchSlider/TouchSlider";
import client2 from "../../public/assets/client2.png";
import client3 from "../../public/assets/client3.jpg";
import client4 from "../../public/assets/client4.jpg";

function SwiperSection() {
  const clients = [
    {
      url: `${client2}`,
      title: "Client 1",
      Address: "Abu dabi",
    },
    {
      url: `${client3}`,
      title: "Client 2",
      Address: "Ein",
    },
    {
      url: `${client4}`,
      title: "Client 3",
      Address: "Shajra",
    },
    {
      url: `${client2}`,
      title: "Client 4",
      Address: "Shajra",
    },
    {
      url: `${client3}`,
      title: "Client 5",
      Address: "Ein",
    },
    {
      url: `${client3}`,
      title: "Client 6",
      Address: "Ein",
    },
  ];

  const SectionStyle = {
    position: "absolute",
    hight: "50%",
    width: "100%",
    top: "1386px",
  };

  return (
    <div style={SectionStyle}>
      <TouchSlider clients={clients}></TouchSlider>
    </div>
  );
}

export default SwiperSection;
