"use client";
import { RadialChart } from "@/components/radial-chart";
import InputField from "@/components/InputField";
import { Component } from "@/components/chart";
import React from "react";
import {
  IconBuildingBank,
  IconListDetails,
  IconChartBar,
  IconHistory,
  IconShoppingBagCheck,
  IconSearch,
  IconGripVertical,
} from "@tabler/icons-react";

const Dashboard = () => {
  // const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col bg-[#050505] gap-5 p-2 w-full h-full">
      <div className="flex justify-center p-1">
        <p className="text-5xl font-bold">Dashboard</p>
      </div>
      <div className="grid grid-cols-12 grid-rows-12 gap-2 h-full">
        <div className="col-span-3 row-span-3 bg-[#0a0a0a] rounded-lg border border-white border-opacity-10">
          <div className="flex justify-center pt-3 gap-2">
            <IconBuildingBank size={30} />
            <p className="text-2xl font-bold">Total Products</p>
          </div>
          <div className="flex flex-row h-full justify-center items-center">
            <div>
              <p className="text-7xl">$1450</p>
            </div>
            <div className="px-5 py-1 bg-[#151515] rounded-full">15.35%</div>
          </div>
          <div>
            <p>From xx - xx</p>
          </div>
        </div>
        <div className="col-span-3 row-span-3 bg-[#0a0a0a] rounded-lg border border-white border-opacity-10">
          <div className="flex justify-center pt-3 gap-2">
            <IconListDetails size={30} />
            <p className="text-2xl font-bold">Incoming Orders</p>
          </div>
          <div></div>
        </div>
        <div className="col-span-3 row-span-3 bg-[#0a0a0a] rounded-lg border border-white border-opacity-10">
          <div className="flex justify-center pt-3 gap-2">
            <IconBuildingBank size={30} />
            <p className="text-2xl font-bold">Total Sales</p>
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
        <div className="col-span-4 row-span-6 bg-[#0a0a0a] border border-white border-opacity-10 rounded-lg">
          <div className="flex justify-center pt-3 gap-2">
            <IconChartBar size={30} />
            <p className="text-2xl font-bold">Sales Graph</p>
          </div>
          <div className="w-full px-10">
            <Component />
          </div>
        </div>
        <div className="col-span-3 row-span-6 bg-[#0a0a0a] rounded-lg border border-white border-opacity-10">
          <div className="flex justify-center pt-3 gap-2">
            <IconListDetails size={30} />
            <p className="text-2xl font-bold">Sales Count</p>
          </div>
          <div>
            <RadialChart />
            <input type="text" />
          </div>
        </div>
        <div className="col-span-5 row-span-6 bg-[#0a0a0a] rounded-lg border border-white border-opacity-10">
          <div className="flex flex-row justify-between items-center pt-3">
            <div className="flex flex-row ml-20 gap-2">
              <IconShoppingBagCheck size={30} />
              <p className="text-2xl font-bold">Sold Products</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <InputField
                inputType="text"
                placeholder="Search"
                icon={<IconSearch size={30} />}
              />
              <div>
                <IconGripVertical className="mr-5 opacity-50" />
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-2 pl-8 pt-6">
            <div className="py-1 px-6 bg-[#151515] rounded-full">Product</div>
            <div className="py-1 px-6 bg-[#151515] rounded-full">Price</div>
            <div className="py-1 px-6 bg-[#151515] rounded-full">Buyer</div>
            <div className="py-1 px-6 bg-[#151515] rounded-full">Time</div>
          </div>
          <div>
            <div>
              <p>Balenciaga</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="col-span-12 row-span-3 bg-[#0a0a0a] rounded-lg border border-white border-opacity-10">
          <div className="flex justify-center pt-3 gap-2">
            <IconHistory size={30} />
            <p className="text-2xl font-bold">Recent Clients</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
