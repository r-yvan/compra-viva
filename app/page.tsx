import { GridPatternDashed } from "@/components/GridPatternDashed";
import TopNavigationBar from "@/components/TopNavigationBar";
import FeatureCard from "@/components/FeatureCard";
import decorator from "@/public/background.png";
import UsersCard from "@/components/UsersCard";
import Image from "next/image";
import React from "react";
import {
  IconChartPie,
  IconCoins,
  IconComet,
  IconTruck,
  IconUserHexagon,
} from "@tabler/icons-react";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 w-full h-full bg-[#050505]">
      <div className="flex flex-col gap-10 w-full h-full bg-[#050505]">
        <div className="flex justify-center w-full pt-1">
          <TopNavigationBar />
        </div>
        <div className="flex flex-row h-full relative">
          <GridPatternDashed />
          <div className="flex w-[55%] h-auto absolute right-0 top-10">
            <Image alt="" src={decorator} className="w-[900px] h-auto"></Image>
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
              <UsersCard userType="Sellers" />
            </div>
            <div>
              <UsersCard userType="Buyers" />
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
          <FeatureCard
            title="Online Trading"
            description="This ecommerce is good since it helps modern and remote trading"
            icon={<IconChartPie size={32} color="#8b5cf6" />}
          />
          <FeatureCard
            title="Order Tracking"
            description="Keeps customers informed with live updates on their shipment's status"
            icon={<IconTruck size={32} color="#8b5cf6" />}
          />
           <FeatureCard
            title="Secured Payments"
            description="Supports multiple payment gateways with encryption and fraud detection."
            icon={<IconCoins size={32} color="#8b5cf6" />}
          />
          {/* // <FeatureCard />
          // <FeatureCard />
          // <FeatureCard /> */}
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Home;
