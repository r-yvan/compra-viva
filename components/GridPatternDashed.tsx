"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export function GridPatternDashed() {
  return (
    <div className="relative p-10 items-center dark flex w-1/2 size-full justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Participate in the world's largest <br /> market ecosystem through
      </p>
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
        )}
      />
      <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
