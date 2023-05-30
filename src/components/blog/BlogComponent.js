import React from "react";
import { Link } from "react-router-dom";

const BlogComponent = (props) => {
  return (
    <div className="flex flex-row gap-24 odd:flex-row-reverse shadow-lg px-6 py-6 rounded">
      <div className="w-full">
        <img src={props.image} alt="" className="h-60 w-[40vw] object-cover" />
      </div>

      <div className="flex flex-col justify-between text-left">
        <Link to={`/blogs/${props.id}`}>
          <h1 className="text-4xl font-bold">{props.title}</h1>
        </Link>
        <p className="text-base">{props.content}</p>
        <button className="w-max py-2 px-4 border border-solid rounded border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogComponent;
