import React, { useState } from "react";

const Slider = () => {
  const data = [
    "https://images.unsplash.com/photo-1560243563-062bfc001d68",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5",
    "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(currentIndex === 3 ? 0 : currentIndex + 1);
  };
  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? 3 : currentIndex - 1);
  };
  return (
    <div className="slider flex flex-col ">
      <div className="main flex flex-row mt-6 transition-all ease-in">
        <img
          src={data[currentIndex]}
          alt="store"
          style={{ width: "100%", height: 730 }}
          className="shrink-0"
        />
      </div>
      <div className="icons absolute flex gap-3 justify-center inset-x-0 bottom-0">
        <div className="icon" onClick={handlePrevious}>
          <i className="fa-solid fa-circle-arrow-left fa-2x"></i>
        </div>
        <div className="icon" onClick={handleNext}>
          <i className="fa-solid fa-circle-arrow-right fa-2x"></i>
        </div>
      </div>
    </div>
  );
};

export default Slider;
