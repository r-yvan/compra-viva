import Image from "next/image";
import React from "react";
import shoes from "../public/shoes1.jpg";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

const ProductCard = ({}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-fit">
        <Image src={shoes} alt="" className="w-48" />
        <IconHeart size={20} className="absolute top-1 right-1 opacity-50"/>
      </div>
      <div>
        <div className="flex flex-row gap-1 px-2 py-1 bg-[#151515] w-fit rounded-full">
          <IconHeartFilled size={20} color="#F54254" className="" />
          <p className="text-sm opacity-50">4.5M +</p>
        </div>
        <div>
          <p className="text">Nike Shoes</p>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductCard;
