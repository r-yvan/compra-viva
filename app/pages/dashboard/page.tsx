import React from "react";
import { Component } from "./chart";
import {
  IconBuildingBank,
  IconListDetails,
  IconHistory,
  IconChartBar,
  IconShoppingBagCheck,
} from "@tabler/icons-react";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-[#050505] gap-5 p-2 w-full h-screen">
      <div>
        <p className="text-5xl font-bold pt-3 pl-3">Dashboard</p>
      </div>
      <div className="grid grid-cols-12 grid-rows-12 gap-2 h-full">
        <div className="col-span-3 row-span-3 bg-[#0a0a0a] rounded-lg border border-white border-opacity-10">
          <div className="flex justify-center pt-3 gap-2">
            <IconBuildingBank size={30} />
            <p className="text-2xl font-bold">Total Income</p>
          </div>
          <div></div>
        </div>
        <div className="col-span-3 row-span-3 bg-[#0a0a0a] rounded-lg border border-white border-opacity-10">
          <div className="flex justify-center pt-3 gap-2">
            <IconListDetails size={30} />
            <p className="text-2xl font-bold">Total Orders</p>
          </div>
          <div></div>
        </div>
        <div className="col-span-6 row-span-6 bg-[rgb(10,10,10)] rounded-lg border border-white border-opacity-10">
          <div className="flex justify-center pt-3 gap-2">
            <IconHistory size={30} />
            <p className="text-2xl font-bold">Recent Client</p>
          </div>
          <div></div>
        </div>
        <div className="col-span-6 row-span-9 bg-[#0a0a0a] rounded-lg border border-white border-opacity-10">
          <div className="flex justify-center pt-3 gap-2">
            <IconChartBar size={30} />
            <p className="text-2xl font-bold">Sales Graph</p>
          </div>
          <div className="w-full px-10">
            <Component />
          </div>
        </div>
        <div className="col-span-6 row-span-6 bg-[#0a0a0a] rounded-lg border border-white border-opacity-10">
          <div className="flex justify-center pt-3 gap-2">
            <IconShoppingBagCheck size={30} />
            <p className="text-2xl font-bold">Sold Products</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
