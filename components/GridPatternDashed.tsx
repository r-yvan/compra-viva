"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export function GridPatternDashed() {
  return (
    <div className="relative z-10 items-center dark flex w-[55%] size-full justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl">
      <div className="flex flex-col pl-36 gap-10">
        <p className="z-10 whitespace-pre-wrap text-left text-6xl font-medium tracking-tighter text-black dark:text-white">
          Trade high-quality products through <br />
          <span className="text-7xl">
            Compra<span className="text-violet-500">Viva</span>
          </span>
        </p>
        <p className="text-lg font-light">
          Are you looking for the best and most truthfull ecommerce website on
          internet?, then you are in the right place. Discover a world of
          handpicked, high-quality products at unbeatable prices! Whether you're
          looking for the latest fashion, must-have gadgets, or everyday
          essentials, we’ve got you covered.
        </p>
      </div>
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
      <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
