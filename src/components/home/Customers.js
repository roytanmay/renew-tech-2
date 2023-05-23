import React from "react";
import AnimatedCount from "./AnimatedCount";

const Customers = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full h-[50vh] mb-36">
      <div className="flex items-center justify-center w-full h-[25vh] bg-green-800 text-white">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mx-10">Number of Customers</h2>
          <AnimatedCount value="1250" duration={1500} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mx-10">Number of Products Sold</h2>
          <AnimatedCount value="1500" duration={1500} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mx-10">
            Number of Five-Star Ratings
          </h2>
          <AnimatedCount value="90" duration={1500} />
        </div>
      </div>
    </div>
  );
};

export default Customers;
