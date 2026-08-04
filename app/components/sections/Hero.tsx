import Image from "next/image";
import { Inline } from "../RichText";

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
    <>
      {/* Profile Image */}
      <div className="relative mb-2 h-40 w-40 sm:h-56 sm:w-56 overflow-hidden">
        <Image
          src={data.image}
          alt="Profile"
          fill
          sizes="(max-width: 640px) 160px, 224px"
          className="object-contain grayscale"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 backdrop-blur-[1px]" />
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
    </>
  );
}
