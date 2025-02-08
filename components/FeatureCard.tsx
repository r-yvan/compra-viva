import React from "react";
import { IconTerminal2 } from "@tabler/icons-react";
import { IconCoin } from "@tabler/icons-react";
import { div } from "framer-motion/client";

const FeatureCard = () => {
  return (
    <div className="bg-gradient-to-b overflow-hidden from-[#FFFFFF60] via-[#FFFFFF20] to-[#FFFFFF10] p-[1px] w-72 rounded-lg h-48 backdrop-blur-md relative">
      <div className="bg-[#0A0A0A] p-2 lighter-2 rounded-lg flex flex-col gap-2 w-full h-full">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-violet-400 bg-opacity-25 border border-[#FFFFFF20]">
            <IconCoin size={32}/>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xl font-bold">Trading Support</p>
        </div>
        <div className="flex justify-center">
          <p className="font-light text-center text-sm">
            This application provides support for trading which is goog for
            modern traders
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
