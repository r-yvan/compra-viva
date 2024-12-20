import React from "react";
import { IconTerminal2 } from "@tabler/icons-react";
import { IconCoin } from "@tabler/icons-react";
import { div } from "framer-motion/client";

const FeatureCard = ({
  title,
  icon,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
}) => {
  return (
    <div className="flex flex-col p-[1px] w-72 rounded-lg h-48 relative">
      <div className="bg-[#0A0A0A] p-2 pt-4 w-72 h-48 rounded-2xl flex flex-col gap-2">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-[#362b5150]">
            {icon}
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xl font-bold tracking-tight">{title}</p>
        </div>
        <div className="flex justify-center">
          <p className="font-light text-center text-sm opacity-60">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
