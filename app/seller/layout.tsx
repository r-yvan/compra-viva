import SideNavigationBar from "@/components/SideNavigationBar";
import profileImg from "@/public/france.jpeg";
import React from "react";
import {
  IconLayoutDashboard,
  IconListDetails,
  IconPackage,
} from "@tabler/icons-react";

const SellerInterfaceLayout = ({ children }: { children: React.ReactNode }) => {
  const pages = [
    {
      pageUrl: "dashboard",
      pageLabel: "Dashboard",
      pageIcon: <IconLayoutDashboard />,
    },
    {
      pageUrl: "cart",
      pageLabel: "Cart",
      pageIcon: <IconPackage />,
    },
    {
      pageUrl: "orders",
      pageLabel: "Orders",
      pageIcon: <IconListDetails />,
    },
  ];
  return (
    <div className="flex flex-row w-screen h-screen bg-[#050505]">
      <SideNavigationBar
        username="Rubuto Yvan"
        profileImage={profileImg}
        pages={pages}
        userRole="seller"
      />
      <div>{children}</div>
    </div>
  );
};

export default SellerInterfaceLayout;
