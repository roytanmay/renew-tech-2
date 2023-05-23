import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import bgImage1 from "../../images/bg2.jpg";
import bgImage2 from "../../images/bg4.jpg";
import bgImage3 from "../../images/bg5.jpg";

const Slider = () => {
  const slides = [
    {
      url: `${bgImage1}`,
    },
    {
      url: `${bgImage2}`,
    },
    {
      url: `${bgImage3}`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[580px] w-full m-auto relative group mb-40 ">
      <div className="absolute top-1/3 z-10 left-28">
        <h1 className="text-white xl:text-5xl mb-5 lg:text-4xl md:text-3xl">
          WELCOME TO RENEWTECH
        </h1>
        <h2 className="text-white xl:text-2xl lg:text-lg md:text-base">
          Empowering Innovation, Sustaining Progress
        </h2>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative  bg-fixed"
      >
        <div className="flex justify-center py-2 absolute bottom-0 w-full">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer text-white"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Slider;
