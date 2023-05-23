import React from "react";
import { images } from "../../images/images";
import gcmp from "../../images/gcmp.jpg";

const ReadBlogs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-36">
      <h1 className="text-xl dark:text-white">READ OUR BLOGS</h1>
      <div class="flex flex-wrap items-center container mx-auto w-[65vw] my-10">
        <div class="w-full md:w-7/12">
          <h2 class="text-2xl md:text-2xl font-bold mb-4 dark:text-white font-font2">
            Green Data Storage!{" "}
            <span class="text-gray-500">
              Sustainable Solutions for Cloud Storage and Backup
            </span>
          </h2>
          <p class="text-lg md:text-base leading-relaxed font-font1 dark:text-gray-200">
            Discuss environmentally friendly options for data storage, such as
            cloud providers that prioritize renewable energy usage and employ
            efficient data management practices
          </p>
        </div>
        <div class="w-full md:w-5/12">
          <img
            src={images.gdc}
            alt="Placeholder"
            class="mx-auto object-contain w-full h-auto md:w-96 md:h-64"
          />
        </div>
      </div>
      <div class="flex flex-wrap items-center container mx-auto w-[65vw] my-10">
        <div class="w-full md:w-7/12 order-last">
          <h2 class="text-2xl md:text-2xl font-bold mb-4 dark:text-white font-font2">
            Renewable Energy-Powered Gadgets!{" "}
            <span class="text-gray-500">
              Exploring Solar-Powered Laptops and Mobile Devices
            </span>
          </h2>
          <p class="text-lg md:text-base leading-relaxed font-font1 dark:text-gray-200">
            Discuss the development of solar-powered laptops, solar phone
            chargers, and other renewable energy solutions for powering
            electronic gadgets
          </p>
        </div>
        <div class="w-full md:w-5/12 order-first">
          <img
            src={images.sollap}
            alt="Placeholder"
            class="mx-auto object-contain w-full h-auto md:w-96 md:h-64"
          />
        </div>
      </div>

      <div class="flex flex-wrap items-center container mx-auto w-[65vw] my-10">
        <div class="w-full md:w-7/12">
          <h2 class="text-2xl md:text-2xl font-bold mb-4 dark:text-white font-font2">
            Green Computing!{" "}
            <span class="text-gray-500">
              Promoting Sustainability in the Digital Age
            </span>
          </h2>
          <p class="text-lg md:text-base leading-relaxed font-font1 dark:text-gray-200">
            Discuss the concept of green computing, including strategies for
            minimizing electronic waste, extending device lifespan, and adopting
            energy-efficient practices
          </p>
        </div>
        <div class="w-full md:w-5/12">
          <img
            src={gcmp}
            alt="Placeholder"
            class="mx-auto object-contain w-full h-auto md:w-96 md:h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default ReadBlogs;
