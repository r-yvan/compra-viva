import SideNavigationBar from "@/components/SideNavigationBar";
import profileImg from "@/public/france.jpeg";
import React from "react";
import { IconDashboard } from "@tabler/icons-react";
const SellerInterfaceLayout = () => {
  const pages = [
    {
      pageUrl: "dashboard",
      pageLabel: "Dashboard",
      pageIcon: <IconDashboard />,
    },
    {
      pageUrl: "products",
      pageLabel: "Products",
      pageIcon: <IconDashboard />,
    },
    {
      pageUrl: "orders",
      pageLabel: "Orders",
      pageIcon: <IconDashboard />,
    },
    {
      pageUrl: "dashboard",
      pageLabel: "Dashboard",
      pageIcon: <IconDashboard />,
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
    </div>
  );
};

export default SellerInterfaceLayout;
