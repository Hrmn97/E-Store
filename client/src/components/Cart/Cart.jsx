import React from "react";

const Cart = () => {
  const data = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      isNew: true,
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      img1: "https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      img2: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80",
    },
    {
      id: 2,
      title: "iPhone X",
      isNew: false,
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      img1: "https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      img2: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80",
    },
  ];
  return (
    <div className="cart absolute right-5 top-20 z-50 bg-slate-200  p-5 ">
      <h1 className="mb-7 text-gray-600 font-bold text-lg">
        Products in your cart
      </h1>
      {data?.map((item) => (
        <div className="item flex w-96 items-center gap-5 mb-7" key={item.id}>
          <img className="w-20 h-24 object-cover " src={item.img1} alt="" />
          <div className="details ">
            <h1 className="text-lg font-medium ">{item.title}</h1>
            <p className="text-gray-600 mb-2.5 text-sm">
              {item.description.substring(0, 100)}
            </p>
            <div className="price text-blue-600">1 x {item.price} </div>
          </div>
          <i className="fa-solid fa-trash-can fa-xl cursor-pointer"></i>
        </div>
      ))}
      <div className="total flex justify-between font-medium text-base mb-5">
        <span>SUBTOTAL :-</span>
        <span className="">$123</span>
      </div>
      <button className="font-medium w-64 p-2.5 bg-blue-600 text-white flex items-center justify-center gap-5 cursor-pointer">
        PROCEED TO CHECKOUT
      </button>
      <span className="reset text-red-600 text-sm cursor-pointer">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
