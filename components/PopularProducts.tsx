import { popularProducts } from "@/data";
import React from "react";
import PopularProductCard from "./PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container mt-32">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-5xl font-bold">
          Our <span className="text-green-500">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 text-gray-500">
          Eat tasty berries without the need for gathering. Now you can focus on
          hunting with your belly full of juicy goodness.
        </p>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {popularProducts.map((product, idx) => (
          <PopularProductCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
