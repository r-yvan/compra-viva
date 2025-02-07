import { GridPatternDashed } from "@/components/GridPatternDashed";
import TopNavigationBar from "@/components/TopNavigationBar";
import React from "react";
import Image from "next/image";
import { IconTerminal2 } from "@tabler/icons-react";
import { div } from "framer-motion/client";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 w-full h-full bg-[#050505]">
      <div className="flex flex-col gap-10 w-full h-full bg-[#050505]">
        <div className="flex justify-center w-full pt-1">
          <TopNavigationBar />
        </div>
        <div className="flex flex-row h-full relative">
          <GridPatternDashed />
          <div className="flex w-[55%] h-auto absolute right-0">
            <Image
              alt=""
              src={require("@/public/background.png")}
              className="w-full h-auto"
            ></Image>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <p className="text-5xl font-semibold">Features</p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
