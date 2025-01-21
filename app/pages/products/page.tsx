import InputField from "@/components/InputField";
import ProductCard from "@/components/ProductCard";
import {
  IconPackage,
  IconCoin,
  IconAlignRight,
  IconHeart,
} from "@tabler/icons-react";
import React from "react";

const Products = () => {
  return (
    <div className="flex flex-col bg-[#0a0a0a] w-full">
      <div className="flex justify-center p-1">
        <p className="text-5xl font-bold">Products</p>
      </div>
      <div className="flex flex-row gap-1 justify-start pl-10 mt-5">
        <InputField
          inputType="text"
          placeholder="Type"
          icon={
            <IconPackage
              size={24}
              className="opacity-50 right-2 top-2 absolute"
            />
          }
        />
        <InputField
          inputType="text"
          placeholder="Description"
          icon={
            <IconAlignRight
              size={24}
              className="opacity-50 right-2 top-2 absolute"
            />
          }
        />
        <InputField
          inputType="text"
          placeholder="Price"
          icon={
            <IconCoin size={24} className="opacity-50 right-2 top-2 absolute" />
          }
        />
        <InputField
          inputType="text"
          placeholder="Reviews"
          icon={
            <IconHeart
              size={24}
              className="opacity-50 right-2 top-2 absolute"
            />
          }
        />
      </div>
      <div></div>
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
