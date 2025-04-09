"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { IconRun } from "@tabler/icons-react";
import Link from "next/link";

export function GridPatternDashed() {
  return (
    <div className="relative z-10 items-center dark flex w-[55%] size-full justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl">
      <div className="flex flex-col pl-36 gap-12 pr-10">
        <p className="z-10 relative whitespace-pre-wrap text-left text-6xl font-medium tracking-tighter text-black dark:text-white">
          Trade high-quality products through <br />
          <span className="text-7xl">
            Compra<span className="text-violet-500">Viva</span>
          </span>
          <Image
            src={require("@/public/Vector.png")}
            alt=""
            className="absolute -left-24 bottom-2 -rotate-45 h-32 w-auto"
          />
          <Image
            src={require("@/public/v-2.png")}
            alt=""
            className="absolute left-10 h-6"
          />
        </p>
        <div className="flex flex-col gap-5">
          <p className="text-md">
            Are you looking for the best and most truthfull ecommerce website on
            internet?, then you are in the right place. Discover a world of
            handpicked, high-quality products at unbeatable prices! Whether
            you're looking for the latest fashion, must-have gadgets, or
            everyday essentials, we’ve got you covered.
          </p>
          <div className="z-10">
            <Link
              href="/auth/login"
              className="px-10 py-2 flex w-fit flex-row gap-2 bg-violet-600 rounded-lg"
            >
              <IconRun />
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
