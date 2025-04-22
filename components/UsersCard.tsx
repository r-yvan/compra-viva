import { NumberTicker } from "@/components/ui/number-ticker";
import { IconArrowUpRightCircle } from "@tabler/icons-react";
import background from "@/public/shoes1.jpg";
import Image from "next/image";

const UsersCard = ({userType}: {userType: string}) => {
  return (
    <div className="text-white flex flex-row bg-[#151515] rounded-xl p-4 gap-5">
      <div className="flex flex-col gap-3 w-1/2">
        <div className="px-3 py-1 bg-[#202020] w-fit rounded-full">{userType}</div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl tracking-tighter">Join other {userType}</p>
          <p className="opacity-50">
            There is a large community of {userType} out there using CompraViva and
            still making profit out of it
          </p>
        </div>
        <div className="flex items-center">
          <p>
            <span>
              <NumberTicker
                value={967}
                className="whitespace-pre-wrap px-3 py-[1px] bg-violet-600 rounded-full mx-2 text-2xl font-medium tracking-tighter text-white dark:text-white"
              />
            </span>
            <span>+ {userType}</span>
          </p>
        </div>
        <div>
          <button className="px-3 flex gap-2 py-1 bg-[#202020] rounded-full">
            <p className="opacity-50">Join others now</p>
            <IconArrowUpRightCircle className="opacity-50" />
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <Image src={background} alt="" className="h-full w-auto rounded-xl" />
      </div>
    </div>
  );
};

export default UsersCard;
