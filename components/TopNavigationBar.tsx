import React from "react";

const TopNavigationBar = () => {
  return (
    <div className="top-navigation-bar-container relative h-fit w-[500px] rounded-full">
      <nav className="top-navigation-bar border border-[#FFFFFF20] rounded-full flex flex-row text-sm justify-around p-[2px] gap-1 z-10">
        <div className="top-navigation-bar-item flex h-full py-1 px-[10px] rounded-full opacity-70 active:bg-violet-500 border border-[#FFFFFF00] active:opacity-100">
          <p className="text-lg">Home</p>
        </div>
        <div className="top-navigation-bar-item flex h-full py-1 px-[10px] rounded-full opacity-70 active:bg-violet-500 border border-[#FFFFFF00] active:opacity-100">
          <p className="text-lg">Features</p>
        </div>
        <div className="top-navigation-bar-item flex h-full py-1 px-[10px] rounded-full opacity-70 active:bg-violet-500 border border-[#FFFFFF00] active:opacity-100">
          <p className="text-lg">Users</p>
        </div>
        <div className="top-navigation-bar-item flex flex-1 h-full py-1 px-[10px] rounded-full opacity-70 active:bg-violet-500 border border-[#FFFFFF00] active:opacity-100">
          <p className="text-lg">About Me</p>
        </div>
      </nav>
    </div>
  );
};

export default TopNavigationBar;
