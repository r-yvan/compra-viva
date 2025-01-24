import TopNavigationBar from "@/components/TopNavigationBar";
import React from "react";


const Home = () => {
  return (
    <div className="relative bg-[#050505] text-white font-body w-full h-screen flex justify-center align-center">
      <TopNavigationBar />
      <p className="text-2xl bg-transparent font-bold font-body self-center">Welcome to the most widely supported ecommerce platform</p>
    </div>
  );
};

export default Home;
