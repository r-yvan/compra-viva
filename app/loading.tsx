"use client";
import { Bars } from "react-loader-spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full bg-[#0a0a0a] text-6xl">
      <Bars
        height="110"
        width="110"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
