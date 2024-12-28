import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-[#050505] gap-5 p-3 w-full h-screen">
      <div>
        <p className="text-5xl font-bold">Dashboard</p>
      </div>
      <div className="grid grid-cols-12 grid-rows-12 gap-3 h-full">
        <div className="col-span-4 row-span-3 bg-[#0a0a0a] rounded-lg"></div>
        <div className="col-span-4 row-span-3 bg-[#0a0a0a] rounded-lg"></div>
        <div className="col-span-4 row-span-6 bg-[#0a0a0a] rounded-lg"></div>
        <div className="col-span-8 row-span-9 bg-[#0a0a0a] rounded-lg"></div>
        <div className="col-span-4 row-span-6 bg-[#0a0a0a] rounded-lg"></div>
      </div>
    </div>
  );
};

export default Dashboard;
