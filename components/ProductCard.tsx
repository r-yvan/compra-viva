"use client";
import Image from "next/image";
import { Bars } from "react-loader-spinner";
import React, { useState } from "react";
import {
  IconHeart,
  IconHeartFilled,
  IconShoppingCartPlus,
} from "@tabler/icons-react";
import svg from "@/public/upt.png";

interface Props {
  image: string;
  likes: number;
  name: string;
  description: string;
  price: number;
  handleAddToCart: () => void;
}
const ProductCard = ({
  image,
  likes,
  name,
  description,
  price,
  handleAddToCart,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="relative overflow-hidden">
      <div className="lighter relative flex flex-col gap-3 w-80 p-2 bg-[#0f0f0f] rounded-xl border border-white border-opacity-5">
        <div className="relative w-fit rounded-lg overflow-hidden">
          <Image src={image} alt="" className="w-80" />
          <div className="absolute top-1 right-1 opacity-50 w-fit h-fit bg-[#151515] p-1 rounded-full">
            <IconHeart size={20} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1 px-2 py-1 bg-[#151515] w-fit rounded-full">
            <IconHeartFilled size={20} color="#F54254" />
            <p className="text-sm opacity-50">{likes}</p>
          </div>
          <div>
            <p className="text-lg font-bold">{name}</p>
          </div>
          <div>
            <p className="opacity-50 text-sm">
              {description}
            </p>
          </div>
          <div className="bg-[#151515] w-fit px-3 py-1 rounded-full">
            <p className="text-2xl text-gray-300">{price}</p>
          </div>
        </div>
        <div
          className="flex w-40 px-3 py-2 justify-center items-center bg-violet-700 rounded-lg"
          onClick={handleAddToCart}
        >
          {isLoading ? (
            <Bars
              height="24"
              width="20"
              color="#FFFFFF"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <div className="flex flex-row gap-2">
              <IconShoppingCartPlus />
              <p>Add to Cart</p>
            </div>
          )}
        </div>
        <Image
          src={svg}
          alt=""
          className="absolute bottom-1 right-1 opacity-50"
        />
      </div>
    </div>
  );
};

export default ProductCard;
