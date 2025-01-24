import TopNavigationBar from "@/components/TopNavigationBar";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-[#050505]">
      <div className="flex justify-center">
        <TopNavigationBar />
      </div>
      <div className="flex gradient-grid flex-col w-full items-center justify-center pt-16">
        <div className="spot-light relative">
          <div className="flex items-center flex-col h-96">
            <h1 className="text-4xl font-bold">
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
