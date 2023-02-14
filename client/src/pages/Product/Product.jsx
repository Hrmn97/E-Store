import React, { useState } from "react";

const Product = () => {
  const [currentImg, setcurrentImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const data = [
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  ];
  return (
    <div className="product mt-6 py-5 px-12 flex gap-12">
      <div className="left flex gap-5 flex-1">
        <div className="images flex-1">
          <img
            className="w-full h-[150px] object-cover cursor-pointer mb-2.5"
            src={data[0]}
            alt=""
            onClick={(e) => setcurrentImg(0)}
          />
          <img
            className="w-full h-[150px] object-cover cursor-pointer mb-2.5"
            src={data[1]}
            alt=""
            onClick={(e) => setcurrentImg(1)}
          />
        </div>
        <div className="mainImage flex-[5]">
          <img
            className="w-full max-h-[800px] object-cover"
            src={data[currentImg]}
            alt=""
          />
        </div>
      </div>
      <div className="right flex flex-col gap-7 flex-1">
        <h1 className="text-2xl font-bold">Title</h1>
        <span className="text-xl font-medium text-blue-800">$199</span>
        <p className="text-lg font-light text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="quantity flex items-center gap-2.5">
          <button
            className="w-12 h-12 flex items-center justify-center cursor-pointer border-0  bg-gray-400"
            onClick={(e) => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button
            className="w-12 h-12 flex items-center justify-center cursor-pointer border-0  bg-gray-400"
            onClick={(e) => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className="add font-medium w-64 p-2.5 bg-blue-600 text-white flex items-center justify-center gap-5 cursor-pointer">
          <i className="fa-solid fa-cart-plus"> ADD TO CART</i>
        </button>
        <div className="link flex gap-5 ">
          <div className="item flex flex-row items-center text-blue-600 text-sm gap-2.5 ">
            <i class="fa-regular fa-heart"> ADD TO WISHLIST</i>
          </div>
          <div className="item flex flex-row items-center text-blue-600 text-sm gap-2.5">
            <i class="fa-solid fa-scale-balanced"> ADD TO COMPARE</i>
          </div>
        </div>
        <div className="info flex flex-col gap-2.5 text-gray-600 text-sm mt-7 ">
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shit, Men</span>
        </div>
        <hr className="w-full border border-solid " />
        <div className="details flex flex-col gap-2.5 text-gray-600 text-sm mt-7 ">
          <span>Description</span>
          <hr className="w-56 border border-solid " />
          <span>ADDITIONAL INFORMATION</span>
          <hr className="w-56 border border-solid " />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
