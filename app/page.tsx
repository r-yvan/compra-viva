import { GridPatternDashed } from "@/components/GridPatternDashed";
import { IconComet, IconUserHexagon } from "@tabler/icons-react";
import TopNavigationBar from "@/components/TopNavigationBar";
import { Waves } from "@/components/ui/waves-background";
import FeatureCard from "@/components/FeatureCard";
import decorator from "@/public/background.png";
import UsersCard from "@/components/UsersCard";
import { Globe } from "@/components/ui/globe";
import me from "@/public/unreal-me-2.png";
import Image from "next/image";
import React from "react";

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
            <Image alt="" src={decorator} className="w-full h-auto"></Image>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col px-16 gap-10">
        <div className="flex justify-center">
          <p className="text-3xl lighter bg-white bg-opacity-5 backdrop-blur-sm items-center px-1 py-1 rounded-full border border-[#FFFFFF20] pr-4 flex flex-row gap-3 font-semibold">
            <span className="h-full w-full p-2 bg-violet-400 bg-opacity-25 border border-[#FFFFFF20] rounded-full">
              <IconUserHexagon size={28} />
            </span>
            <span>Users</span>
          </p>
        </div>
        <div className="p-10 relative overflow-hidden rounded-3xl bg-[#0A0A0A] z-10 flex flex-col gap-10">
          <Waves
            lineColor={"rgba(255, 255, 255, 0.1)"}
            backgroundColor="transparent"
            waveSpeedX={0.01}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
            className="absolute"
          />
          <div className="w-1/3 z-10">
            <p className="text-4xl text-left tracking-tighter font-medium">
              <span className="text-5xl text-violet-500 font-bold">Join</span>{" "}
              community of traders on a world wide{" "}
              <span className="bg-violet-600 rounded-sm text-[34px] px-2">
                Market.
              </span>
            </p>
          </div>
          <div className="w-full z-10 h-fit flex gap-4 justify-center">
            <div>
              <UsersCard />
            </div>
            <div>
              <UsersCard />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-10 gap-10">
        <div className="flex justify-center">
          <p className="text-3xl lighter bg-white bg-opacity-5 backdrop-blur-sm items-center px-1 py-1 rounded-full border border-[#FFFFFF20] pr-4 flex flex-row gap-3 font-semibold">
            <span className="h-full w-full p-2 bg-violet-400 bg-opacity-25 border border-[#FFFFFF20] rounded-full">
              <IconComet size={28} />
            </span>
            <span>Features</span>
          </p>
        </div>
        <div className="flex p-2 gap-5 justify-center">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
      <div className="bg-[#050505]">
        <div className="flex justify-center">
          <p className="text-3xl lighter bg-white bg-opacity-5 backdrop-blur-sm items-center px-1 py-1 rounded-full border border-[#FFFFFF20] pr-4 flex flex-row gap-3 font-semibold">
            <span className="h-full w-full p-2 bg-violet-400 bg-opacity-25 border border-[#FFFFFF20] rounded-full">
              <IconComet size={28} />
            </span>
            <span>About</span>
          </p>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <p>
              My Name is NKILIYE Rubuto Yvan, I am a specialized UI/UX designer
              and frontend developer with some notions about backend and I&apos;
              m willing to work with anyone interested in solving this
              world&apos; s problems.
            </p>
          </div>
          <div className="relative flex size-full w-1/2 max-w-lg items-center justify-center overflow-hidden rounded-lg bg-[#050505] px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
            <div>
              <Image src={me} alt="" />
            </div>
            <Globe className="top-28" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <p>Stay Connected</p>
          </div>
          <div>
            <p>Contact Me</p>
          </div>
          <div>
            <p>Follow Me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
