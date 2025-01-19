import Image from "next/image";
import React from "react";
import shoes from "../public/shoes1.jpg";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

const ProductCard = ({}) => {
  return (
    <div className="flex flex-col gap-3 w-80 p-2 bg-[#0f0f0f] rounded-xl border border-white border-opacity-5">
      <div className="relative w-fit rounded-lg overflow-hidden">
        <Image src={shoes} alt="" className="w-80" />
        <div className="absolute top-1 right-1 opacity-50 w-fit h-fit bg-[#151515] p-1 rounded-full">
          <IconHeart size={20} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-1 px-2 py-1 bg-[#151515] w-fit rounded-full">
          <IconHeartFilled size={20} color="#F54254" className="" />
          <p className="text-sm opacity-50">4.5M +</p>
        </div>
        <div>
          <p className="text-lg font-bold">Nike Shoes</p>
        </div>
        <div>
          <p className="opacity-50 text-sm">
            These are one of the best nike shoes on the market now times..
          </p>
        </div>
        <div className="bg-[#151515] w-fit px-3 py-1 rounded-full">
          <p className="text-2xl text-gray-300">$120</p>
        </div>
      </div>
      <div className="py-2 px-4 bg-violet-700 w-fit rounded-lg">
        <p>Add to Cart</p>
      </div>
    </div>
  );
};

export default ProductCard;
