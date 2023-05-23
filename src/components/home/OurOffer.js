import React from "react";
import { images } from "../../images/images";

const OurOffer = () => {
  return (
    <div className="w-full flex flex-col h-[60vh] justify-center items-center mb-40">
      <h1 className="text-xl dark:text-white">WHAT WE OFFER</h1>
      <div className="flex flex-row justify-center items-center w-full h-[80vh]">
        <div class="bg-white w-80 h-80 shadow-lg shadow-green-700/50 p-2 my-10 mx-3 rounded">
          <img
            class="w-24 h-24 rounded-full mx-auto mb-4"
            src={images.logo1}
            alt="it"
          />
          <h2 class="text-xl font-semibold mb-2">Worldwide Wonders</h2>
          <p class="text-gray-700">
            Travel the globe through our storefront and explore the finest
            sustainable electronic gadgets from different countries, handpicked
            to meet your eco-friendly lifestyle
          </p>
        </div>
        <div class="bg-white w-80 h-80 shadow-lg shadow-green-700/50 p-2 my-10 mx-3 rounded">
          <img
            class="w-24 h-24 rounded-full mx-auto mb-4"
            src={images.logo3}
            alt="green"
          />
          <h2 class="text-xl font-semibold mb-2">Green Packaging</h2>
          <p class="text-gray-700">
            Embrace sustainable shipping practices and join us in safeguarding
            the environment by choosing our eco-friendly packaging solutions
            that minimize waste and leave a positive impact on the planet
          </p>
        </div>
        <div class="bg-white w-80 shadow-lg shadow-green-700/50 h-80 p-2 my-10 mx-3 rounded">
          <img
            class="w-24 h-24 rounded-full mx-auto mb-4"
            src={images.logo2}
            alt="pac"
          />
          <h2 class="text-xl font-semibold mb-2">Peace of Mind</h2>
          <p class="text-gray-700">
            Your peace of mind is our priority. Enjoy worry-free ownership with
            our comprehensive warranty and dedicated support, ensuring your
            sustainable gadgets are protected and supported every step of the
            way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurOffer;
