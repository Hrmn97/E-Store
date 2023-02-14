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
    <div className="slider w-screen h-[calc(100vh_-_80px)] mt-6 relative overflow-hidden ">
      <div
        className="main w-[400vw] h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        <img className="h-full w-[100vw] object-cover" src={data[0]} alt="" />
        <img className="h-full w-[100vw] object-cover" src={data[1]} alt="" />
        <img className="h-full w-[100vw] object-cover" src={data[2]} alt="" />
        <img className="h-full w-[100vw] object-cover" src={data[3]} alt="" />
      </div>
      <div className="icons gap-2.5 absolute w-fit inset-x-0 flex bottom-[50px] m-auto">
        <div
          onClick={handlePrevious}
          className="icon w-12 h-12 border border-solid border-gray-900 flex items-center justify-center cursor-pointer "
        >
          {" "}
          <i className="fa-solid fa-arrow-left fa-2x"></i>
        </div>
        <div
          onClick={handleNext}
          className="icon w-12 h-12 border border-solid border-gray-900 flex items-center justify-center cursor-pointer"
        >
          <i className="fa-solid fa-arrow-right fa-2x"></i>
        </div>
      </div>
    </div>
  );
};

export default Slider;
