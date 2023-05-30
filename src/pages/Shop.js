import React, { useState, useEffect, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { RxDotFilled } from "react-icons/rx";
import sbg2 from "../images/sbg2.jpg";
import { images } from "../images/images";
import ProductCard from "../components/shop/ProductCard";
import Card from "../components/shop/Card";

const Shop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: `${sbg2}`,
    },
  ];
  const cards = [
    {
      image: `${images.del}`,
      text: "Fast Delivery",
    },
    {
      image: `${images.online}`,
      text: "Online Shopping",
    },
    {
      image: `${images.save}`,
      text: "Save Money",
    },
    {
      image: `${images.support}`,
      text: "24/7 Support",
    },
    {
      image: `${images.promo}`,
      text: "Promotion",
    },
    {
      image: `${images.recycle}`,
      text: "Recycle",
    },
  ];
  return (
    <div>
      <div className="h-[580px] w-full m-auto relative group mb-28 ">
        <div className=" absolute top-1/3 z-10 right-36">
          <h4 className="text-white xl:text-xl absolute -top-8 right-0">
            Trade-in offer
          </h4>
          <h1 className="text-white xl:text-6xl mb-5 lg:text-5xl md:text-4xl sm:text-3xl">
            Super value deals
          </h1>
          <h2 className="text-green-100 xl:text-4xl lg:text-3xl md:text-2xl absolute right-0">
            On all products
          </h2>
          <h4 className="text-white xl:text-base absolute top-32 right-0">
            Save more with coupon and get upto 70% off
          </h4>
          <h5 className="text-green-800 xl:text-base absolute top-48 right-5 z-10 italic">
            <a href="#">Shop Now</a>
          </h5>
          <img
            className="absolute top-44 right-0"
            src={images.btn}
            alt=""
            width="120"
            h="100"
          />
        </div>
        <div
          style={{ backgroundImage: `url(${slides[0].url})` }}
          className="w-full h-full bg-center bg-cover duration-500 relative"
        ></div>
      </div>
      <div className="h-[580px] flex flex-wrap justify-center w-full">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            text={card.text}
            color={card.color}
          />
        ))}
      </div>
      <ProductCard></ProductCard>
    </div>
  );
};
export default Shop;
