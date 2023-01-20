import React from "react";

const Footer = () => {
  return (
    <div className="footer absolute mt-20">
      <div className="top grid grid-cols-4 gap-4 mr-24 text-sm">
        <div className="item flex flex-col gap-y-2 top-0 place-self-center">
          <h1 className="font-mono font-bold text-lg">Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Children</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>
        <div className="item flex flex-col gap-y-2 mb-8 top-0 place-self-start">
          <h1 className="font-mono font-bold text-lg">Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item flex top-0 flex-col">
          <h1 className="font-mono font-bold text-lg">About</h1>
          <span className="text-justify pt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
        </div>
        <div className="item flex top-0 flex-col">
          <h1 className="font-mono font-bold text-lg">Contact</h1>
          <span className="text-justify pt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
        </div>
      </div>
      <div className="bottom grid grid-cols-2 mt-8">
        <div className="left place-self-center mr-48">
          <span className="logo text-xl pr-3 font-extrabold text-teal-500">
            E/Store{" "}
          </span>

          <span className=" pl-4 copyrights text-sm">
            <i className="fa-regular fa-2xs fa-copyright"></i> Copyright 2023.
            All Rights Reserved
          </span>
        </div>
        <div className="right space-x-4 flex justify-end mr-24">
          <span className="space-x-4">
            <i class="fa-brands fa-3x fa-cc-apple-pay"></i>
            <i class="fa-brands fa-3x fa-google-pay"></i>
            <i class="fa-brands fa-3x fa-paypal"></i>
            <i class="fa-brands fa-3x fa-amazon-pay"></i>
            <i class="fa-brands fa-3x fa-alipay"></i>
            <i class="fa-brands fa-3x fa-bitcoin"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
