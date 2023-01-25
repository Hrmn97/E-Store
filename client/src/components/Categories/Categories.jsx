import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories flex h-screen gap-1 mx-2 ">
      <div style={{ flex: 1 }} className="col gap-2.5 flex flex-col">
        <div className="row overflow-hidden flex-1 flex relative gap-2.5">
          <img
            src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="store"
            className="w-full h-full object-cover "
          />
          <button className="absolute max-w-fit w-fit cursor-pointer uppercase font-medium h-12 p-2.5 inset-0 m-auto border-0 bg-white">
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row overflow-hidden flex-1 flex relative gap-2.5">
          <img
            src="https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="store"
            className="w-full h-full object-cover"
          />
          <button className="absolute max-w-fit w-fit cursor-pointer uppercase font-medium h-12 p-2.5 inset-0 m-auto border-0 bg-white">
            <Link className="link" to="/products/1">
              Men
            </Link>
          </button>
        </div>
      </div>
      <div style={{ flex: 1 }} className="col gap-2.5 flex flex-col">
        <div className="row overflow-hidden flex-1 relative flex gap-2.5">
          <img
            src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="store"
            className="w-full h-full object-cover"
          />
          <button className="absolute max-w-fit w-fit cursor-pointer uppercase font-medium h-12 p-2.5 inset-0 m-auto border-0 bg-white">
            <Link className="link" to="/products/1">
              Shoes
            </Link>
          </button>
        </div>
      </div>
      <div style={{ flex: 2 }} className="col gap-2.5 col-l  flex flex-col">
        <div className="row overflow-hidden flex-1 flex gap-2.5">
          <div style={{ flex: 1 }} className="col  gap-2.5 flex flex-col">
            <div className="row overflow-hidden relative flex-1 flex gap-2.5">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                alt="store"
                className="w-full h-full object-cover"
              />
              <button className="absolute max-w-fit w-fit cursor-pointer uppercase font-medium h-12 p-2.5 inset-0 m-auto border-0 bg-white">
                <Link className="link" to="/products/1">
                  Women
                </Link>
              </button>
            </div>
          </div>
          <div style={{ flex: 1 }} className="col gap-2.5 flex flex-col">
            <div className="row overflow-hidden relative flex-1 flex gap-2.5">
              <img
                src="https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="store"
                className="w-full h-full object-cover"
              />
              <button className="absolute max-w-fit w-fit cursor-pointer uppercase font-medium h-12 p-2.5 inset-0 m-auto border-0 bg-white">
                <Link className="link" to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row overflow-hidden relative flex-1 flex gap-2.5">
          <img
            src="https://images.unsplash.com/photo-1577974213190-c07a5dd4467c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80"
            alt="store"
            className="w-full h-full object-cover"
          />
          <button className="absolute max-w-fit w-fit cursor-pointer uppercase font-medium h-12 p-2.5 inset-0 m-auto border-0 bg-white">
            <Link className="link" to="/products/1">
              Fashion
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
