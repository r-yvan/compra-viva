import { GridPatternDashed } from "@/components/GridPatternDashed";
import TopNavigationBar from "@/components/TopNavigationBar";
import React from "react";
import Image from "next/image";
import decorator from "@/public/background.png";
import { IconComet } from "@tabler/icons-react";
import FeatureCard from "@/components/FeatureCard";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 w-full h- bg-[#050505]">
      <div className="flex flex-col gap-10 w-full h-full bg-[#050505]">
        <div className="flex justify-center w-full pt-1">
          <TopNavigationBar />
        </div>
        <div className="flex flex-row h-full relative">
          <GridPatternDashed />
          <div className="flex w-[55%] h-auto absolute right-0">
            <Image alt="" src={decorator} className="w-full h-auto"></Image>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <p className="text-3xl lighter bg-white bg-opacity-5 backdrop-blur-sm items-center px-1 py-1 rounded-full border border-[#FFFFFF20] pr-4 flex flex-row gap-3 font-semibold">
            <span className="h-full w-full p-2 bg-violet-400 bg-opacity-25 border border-[#FFFFFF20] rounded-full">
              <IconComet size={28} />
            </span>
            <span>Features</span>
          </p>
        </div>
        <div className="">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
