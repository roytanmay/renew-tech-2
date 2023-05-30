import React from "react";

const ProductCard = ({ image, title, text }) => {
  return (
    <div
      className={`h-[250px] w-[500px] mx-2 bg-white rounded-lg overflow-hidden shadow-lg`}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <p className={`text-gray-700  text-base`}>{text}</p>
      </div>
    </div>
  );
};

export default ProductCard;
