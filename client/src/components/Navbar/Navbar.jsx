import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar flex flex-row justify-between mt-4">
      <div className="left flex items-center gap-x-4 h-8 ml-2 text-lg">
        <div className="item flex items-center gap-x-1 h-8">
          <img src="/img/flag.png" alt="Flag" />
          <i className="fa-solid fa-xl fa-sort-down pb-2"></i>
        </div>
        <div className="item flex items-center gap-x-1 h-8">
          <span>AED</span>
          <i className="fa-solid fa-xl fa-sort-down pb-2"></i>
        </div>
        <div className="item hover:underline">
          <Link to="/products/1">Men</Link>
        </div>
        <div className="item hover:underline">
          <Link to="/products/2">Women</Link>
        </div>
        <div className="item hover:underline">
          <Link to="/products/3">Children</Link>
        </div>
      </div>
      <div className="center text-2xl font-serif underline hover:no-underline">
        <Link to="/">E / Store</Link>
      </div>
      <div className="right flex items-center gap-x-4 h-8 ml-2 text-lg">
        <div className="item">
          <Link to="/">Homepage</Link>
        </div>
        <div className="item">
          <Link to="/">About</Link>
        </div>
        <div className="item">
          <Link to="/">Contact</Link>
        </div>
        <div className="item">
          <Link to="/">Store</Link>
        </div>
        <div className="icons flex items-center gap-x-4 h-8 mr-4">
          <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
          <i className="fa-solid fa-user cursor-pointer"></i>
          <i className="fa-solid fa-heart cursor-pointer"></i>
          <div className="carticon" onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
            <span className="border bg-sky-500 text-white border-sky-500 text-base mb-4 items-center mr-2 rounded-full">
              00
            </span>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
