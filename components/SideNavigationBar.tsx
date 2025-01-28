import React from "react";
import Link from "next/link";
import "@/globals.css";
import Image from "next/image";

interface SideNavigationBarProps {
  username: string;
  profileImage: any;
  userRole: string;
  pages: { pageUrl: string; pageLabel: string; pageIcon: JSX.Element }[];
}
const SideNavigationBar = ({
  username,
  profileImage,
  userRole,
  pages,
}: SideNavigationBarProps) => {
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
              <p>{username}</p>
            </div>
            <div>
              {userRole == "buyer" && (
                <p className="font-light text-opacity-40">Buyer</p>
              )}
              {userRole == "seller" && (
                <p className="font-light text-opacity-40">Seller</p>
              )}
              {userRole == "admin" && (
                <p className="font-light text-opacity-40">Administrator</p>
              )}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col p-8 gap-5">
        <div>
          <p className="flex justify-center font-bold text-2xl">Pages</p>
        </div>
        <div className="flex flex-col gap-1">
          {pages.map((page) => (
            <Link
              href={"./" + page.pageUrl}
              className="flex flex-row items-center px-7 py-3 gap-3 hover:bg-violet-700 rounded-lg"
            >
              <div>{page.pageIcon}</div>
              <p className="text-lg font-light">{page.pageLabel}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavigationBar;
