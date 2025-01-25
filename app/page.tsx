import TopNavigationBar from "@/components/TopNavigationBar";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 w-full h-full bg-[#050505]">
      <div className="flex justify-center w-full pt-1">
        <TopNavigationBar />
      </div>
      <div className="flex flex-col w-full items-center justify-center pt-32">
        <div className="w-[800px] relative">
          <div className="flex items-center flex-col h-96 spot-light">
            <h1 className="text-5xl font-body font-bold text-center">
              Make purchase and sell to world wide market via Compra
              <span className="text-violet-500">Viva</span>
            </h1>
            <p className="text-2xl">
              A place where you can buy and sell anything you want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
