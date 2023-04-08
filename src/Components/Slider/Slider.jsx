import React, { useState } from "react";
import "./Slider.scss";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = ["../img/im1.jpg", "../img/im2.jpg", "../img/im3.jpg"];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="slider">
      <div
        className="conatiner"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img className="image" src={data[0]} alt="" />
        <img className="image" src={data[1]} alt="" />
        <img className="image" src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
