import React from "react";
import { IconTerminal2 } from "@tabler/icons-react";
import { IconCoin } from "@tabler/icons-react";
import { div } from "framer-motion/client";

const FeatureCard = () => {
  return (
    <div className="bg-gradient-to-b overflow-hidden from-[#FFFFFF60] via-[#FFFFFF20] to-[#FFFFFF10] p-[1px] w-72 rounded-lg h-48 backdrop-blur-md relative">
      <div className="bg-[#0A0A0A] lighter-2 rounded-lg w-full h-full">
        <div>
          <div>
            <IconCoin />
          </div>
        </div>
        <div>
          <p>Trading Support</p>
        </div>
        <div>
          <p>
            This application provides support for trading which is goog for
            modern traders
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
