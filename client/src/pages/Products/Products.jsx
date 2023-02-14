import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";

const Products = () => {
  const id = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  return (
    <div className="products pl-12 pr-7 flex mt-6">
      <div className="left flex-1 sticky h-full top-12">
        <div className="filterItem mb-7">
          <h2 className="font-normal mb-5 text-lg">Product categories</h2>
          <div className="inputItem mb-2.5 ">
            <input type="checkbox" id="1" value={1} />
            <label className="ml-2.5" htmlFor="1">
              Shoes
            </label>
          </div>
          <div className="inputItem mb-2.5 ">
            <input type="checkbox" id="2" value={2} />
            <label className="ml-2.5" htmlFor="2">
              Accessories
            </label>
          </div>
          <div className="inputItem mb-2.5 ">
            <input type="checkbox" id="3" value={3} />
            <label className="ml-2.5" htmlFor="3">
              Clothes
            </label>
          </div>
        </div>
        <div className="filterItem mb-7">
          <h2 className="font-normal mb-5 text-lg">Filter by price</h2>
          <div className="inputItem mb-2.5 ">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem mb-7">
          <h2 className="font-normal mb-5 text-lg">Sort by</h2>
          <div className="inputItem mb-2.5 ">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label className="ml-2.5" htmlFor="asc">
              Price (Lowest First)
            </label>
          </div>
          <div className="inputItem mb-2.5 ">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label className="ml-2.5" htmlFor="desc">
              Price (Highest First)
            </label>
          </div>
          <div className="inputItem mb-2.5 ">
            <input type="radio" id="def" value="def" name="price" />
            <label className="ml-2.5" htmlFor="def">
              Default
            </label>
          </div>
        </div>
      </div>
      <div className="right flex-[3]">
        <img
          className="image w-full h-[300px] object-cover mb-12"
          src="https://images.unsplash.com/photo-1559551409-dadc959f76b8"
          alt=""
        />
        <List id={id} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
