import React from "react";
import Link from "next/link";
import profileImage from "../public/france.jpeg";
import {
  IconLayoutDashboard,
  IconListDetails,
  IconPackage,
  IconShoppingCart,
} from "@tabler/icons-react";
import "./globals.css";
import Image from "next/image";

const SideNavigationBar = () => {
  return (
    <div className="flex flex-col bg-[#0a0a0a] gap-36 w-fit border-r-[1px] border-white border-opacity-10">
      <div className="flex flex-col gap-5 pt-6 pl-6">
        <div className="flex">
          <p className="font-extrabold text-2xl">
            Compra<span className="text-violet-400">Viva.</span>
          </p>
        </div>
        <Link href="/profile" className="flex flex-row gap-2">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image src={profileImage} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="font-bold">
              <p>France NK</p>
            </div>
            <div>
              <p className="font-light text-opacity-40">Seller</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col p-8 gap-5">
        <div>
          <p className="flex justify-center font-bold text-2xl">Pages</p>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href="/pages/dashboard"
            className="flex flex-row items-center px-7 py-3 gap-3 hover:bg-violet-700 rounded-lg"
          >
            <IconLayoutDashboard color="white" size={26} />
            <p className="text-lg font-light">Dashboard</p>
          </Link>
          <Link
            href="/pages/products"
            className="flex flex-row items-center px-7 py-3 gap-3 hover:bg-violet-700 rounded-lg"
          >
            <IconPackage color="white" size={26} />
            <p className="text-lg font-light">Cart</p>
          </Link>
          <Link
            href="/pages/market"
            className="flex flex-row items-center px-7 py-3 gap-3 hover:bg-violet-700 rounded-lg"
          >
            <IconShoppingCart color="white" size={26} />
            <p className="text-lg font-light">Market</p>
          </Link>
          <Link
            href="/pages/orders"
            className="flex flex-row items-center px-7 py-3 gap-3 hover:bg-violet-700 rounded-lg"
          >
            <IconListDetails color="white" size={26} />
            <p className="text-lg font-light">Orders</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavigationBar;
