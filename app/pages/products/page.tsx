import ProductCard from "@/components/ProductCard";
import React from "react";

const Products = () => {
  return (
    <div className="flex flex-col bg-[#0a0a0a] w-full">
      <div className="flex justify-center p-1">
        <p className="text-5xl font-bold">Products</p>
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
