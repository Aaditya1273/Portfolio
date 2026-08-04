"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * A region that collapses to `collapsedHeight` with a fade-out gradient and a
 * "View More / View Less" toggle. Shared by the featured experience card, the
 * product-journey card, and publication abstracts.
 */
export function Collapsible({
  children,
  collapsedHeight = "max-h-48",
  gradientHeight = "h-20",
  className = "",
}: {
  children: ReactNode;
  collapsedHeight?: string;
  gradientHeight?: string;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        className={`relative transition-all duration-500 ${
          !expanded ? `${collapsedHeight} overflow-hidden` : ""
        } ${className}`}
      >
        {children}
        {!expanded && (
          <div
            className={`absolute bottom-0 left-0 right-0 ${gradientHeight} bg-gradient-to-t from-white dark:from-black to-transparent`}
          />
        )}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
      >
        {expanded ? (
          <>
            View Less <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            View More <ChevronDown className="h-4 w-4" />
          </>
        )}
      </button>
    </>
  );
}
