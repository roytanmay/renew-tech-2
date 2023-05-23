import React from "react";
import { images } from "../../images/images";

const SupportingPartners = () => {
  return (
    <div className="w-full flex flex-col h-[60vh] justify-center items-center mb-40">
      <h1 className="text-xl dark:text-white mb-10">OUR SUPPORTING PARTNERS</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-[65vw]">
        <div class="bg-white rounded-lg shadow-lg border border-none p-4">
          <img
            src={images.sp1}
            alt=""
            class="mx-auto object-contain w-96 h-40"
          />
        </div>
        <div class="bg-white rounded-lg border border-none p-4">
          <img
            src={images.sp2}
            alt=""
            class="mx-auto object-contain w-96 h-40"
          />
        </div>
        <div class="bg-white rounded-lg shadow-lg border border-none p-4">
          <img
            src={images.sp3}
            alt=""
            class="mx-auto object-contain w-96 h-40"
          />
        </div>
        <div class="bg-white rounded-lg border border-none p-4">
          <img
            src={images.sp4}
            alt=""
            class="mx-auto object-contain w-96 h-40"
          />
        </div>
        <div class="bg-white rounded-lg shadow-lg border border-none p-4">
          <img
            src={images.sp5}
            alt=""
            class="mx-auto object-contain w-96 h-40"
          />
        </div>
        <div class="bg-white rounded-lg border border-none p-4">
          <img
            src={images.sp6}
            alt=""
            class="mx-auto object-contain w-96 h-40"
          />
        </div>
      </div>
    </div>
  );
};

export default SupportingPartners;
