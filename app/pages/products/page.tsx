import ProductCard from "@/components/ProductCard";
import React from "react";

const Products = () => {
  return (
    <div className="flex flex-col bg-[#0a0a0a] w-full">
      <div className="flex justify-center p-1">
        <p className="text-5xl font-bold">Products</p>
      </div>
      {/* <div className="flex flex-row gap-2 justify-center">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div> */}
      <div className="p-10">
        <ProductCard
          description="This is one of the best nike shoes on the market try them..."
          name="Nike Shoes"
          likes={930}
          price={88.999}
          image="/shoes1.jpg"
        />
      </div>
    </div>
  );
};

export default Products;
