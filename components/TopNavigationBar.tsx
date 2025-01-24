import { div } from "framer-motion/client";
import React from "react";

const TopNavigationBar = () => {
  return (
    <div className="top-navigation-bar-container relative h-fit rounded-full">
      <nav className="top-navigation-bar border border-[#FFFFFF20] rounded-full flex flex-row text-sm justify-around p-1 gap-1 z-10">
        <div className="top-navigation-bar-item h-full py-1 px-[10px] rounded-full opacity-70 active:bg-violet-500 active:shadow-lg active:shadow-violet-500 active active:opacity-100">
          <p>Home</p>
        </div>
        <div className="top-navigation-bar-item h-full py-1 px-[10px] rounded-full opacity-70 active:bg-violet-500 active:shadow-lg active:shadow-violet-500 active active:opacity-100">
          <p>Features</p>
        </div>
        <div className="top-navigation-bar-item h-full py-1 px-[10px] rounded-full opacity-70 active:bg-violet-500 active:shadow-lg active:shadow-violet-500 active active:opacity-100">
          <p>Users</p>
        </div>
        <div className="top-navigation-bar-item h-full py-1 px-[10px] rounded-full opacity-70 active:bg-violet-500 active:shadow-lg active:shadow-violet-500 active active:opacity-100">
          <p>About Me</p>
        </div>
      </nav>
    </div>
  );
};

export default TopNavigationBar;
