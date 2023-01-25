import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div>
      <Link className="Link" to={`/product/${item.id}`}>
        <div className="card mb-12 w-56 flex flex-col gap-4">
          <div className="image w-full h-72 overflow-hidden transition-all duration-700 card relative hover:z-20">
            {item.isNew && (
              <span className="absolute left-1 top-1 pt-0.5 pb-0.5 pl-1 pr-1 bg-white text-emerald-600 text-sm font-medium z-30">
                New Season
              </span>
            )}
            <div className="absolute transition-all duration-100 z-20 hover:opacity-0">
              <img
                src={item.img1}
                alt="image1"
                className="mainImage w-full h-full object-cover"
              />
            </div>
            <div className="absolute transition-all z-10 card-back">
              <img
                src={item.img2}
                alt="image2"
                className="secondImage w-full h-full object-cover "
              />
            </div>
          </div>
          <h2 className="text-lg font-normal">{item.title}</h2>
          <div className="price flex gap-8">
            <h3 className="text-base font-medium text-gray-500 line-through">
              ${item.price}
            </h3>
            <h3 className="text-base font-medium">${item.price}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

// relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card
