import { GridPatternDashed } from "@/components/GridPatternDashed";
import TopNavigationBar from "@/components/TopNavigationBar";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 w-full h-full bg-[#050505]">
      <div className="flex justify-center w-full pt-1">
        <TopNavigationBar />
      </div>
      <div className="flex flex-row h-full">
        <GridPatternDashed />
        <div className="flex w-1/2 h-full">gb</div>
      </div>
    </div>
  );
};

export default Home;
