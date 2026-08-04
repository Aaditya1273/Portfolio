import Image from "next/image";
import { Inline } from "../RichText";

import LunarGravityCard from "../ui/lunar-gravity-card";

export interface HeroData {
  image: string;
  name: string;
  phonetic: string;
  noun: string;
  timezone: { label: string; tz: string };
  /** Intro paragraphs (markdown inline supported). */
  intro: string[];
}

export function Hero({ data, time }: { data: HeroData; time: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* 3D Planet */}
      <div className="relative mb-6 flex h-48 w-48 items-center justify-center overflow-visible sm:h-64 sm:w-64">
        {/* We make the canvas container much wider to fit the rings horizontally without cropping */}
        <div className="absolute z-0 h-[150%] w-[300%] -left-[100%] -top-[25%] pointer-events-auto">
          <LunarGravityCard className="h-full w-full min-h-[100px]" />
        </div>
      </div>

      {/* Hero Text */}
      <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">{data.name}</h1>

      {/* Phonetic Pronunciation + local time */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500 sm:text-sm">
        <span>{data.phonetic}</span>
        <span className="text-gray-300 dark:text-gray-700">•</span>
        <span>{data.noun}</span>
        <span className="text-gray-300 dark:text-gray-700">•</span>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="tabular-nums text-xs sm:text-sm">{time || "00:00:00"}</span>
            <span className="text-[10px] uppercase tracking-wider sm:text-xs">{data.timezone.label}</span>
          </div>
        </div>
      </div>

      <div className="w-full space-y-4 text-left text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl">
        {data.intro.map((p, i) => (
          <p key={i}>
            <Inline text={p} />
          </p>
        ))}
      </div>
    </div>
  );
}
