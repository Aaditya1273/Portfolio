"use client";

import { useState } from "react";
import { ExternalLink, GitPullRequest, GitMerge } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { RichText } from "../RichText";
import type { Block } from "../types";

export interface OpenSourceItem {
  name: string;
  role: string;
  period?: string;
  location?: string;
  link?: string;
  tags?: string[];
  prs?: number;
  body: Block[];
}

export interface OpenSourceData {
  items: OpenSourceItem[];
}

export function OpenSourceSection({
  title,
  data,
}: {
  title: string;
  data: OpenSourceData;
}) {
  const [active, setActive] = useState(0);
  const item = data.items[active];

  return (
    <SectionShell title={title}>
      {/* Tab strip */}
      <div className="mb-6 flex flex-wrap gap-2">
        {data.items.map((entry, i) => (
          <button
            key={entry.name}
            onClick={() => setActive(i)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
              i === active
                ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                : "border-gray-200 bg-transparent text-gray-500 hover:border-gray-400 hover:text-black dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-white"
            }`}
          >
            {entry.name}
          </button>
        ))}
      </div>

      {/* Active card */}
      <div
        key={item.name}
        className="animate-in fade-in duration-200 rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8"
      >
        {/* Header */}
        <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-lg font-semibold text-black dark:text-white">
                {item.name}
              </span>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${item.name}`}
                  className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
              <span className="font-medium">{item.role}</span>
              {item.period && (
                <>
                  <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                  <span>{item.period}</span>
                </>
              )}
              {item.location && (
                <>
                  <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                  <span>{item.location}</span>
                </>
              )}
            </div>
          </div>

          {/* PR count badge */}
          {item.prs != null && (
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
              <GitMerge className="h-3.5 w-3.5 text-green-500" />
              {item.prs} PR{item.prs !== 1 ? "s" : ""} merged
            </div>
          )}
        </div>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Body */}
        <div className="space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <RichText blocks={item.body} />
        </div>

        {/* Visit link */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-black dark:text-white underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white transition-colors"
          >
            <GitPullRequest className="h-3.5 w-3.5" />
            View contributions
          </a>
        )}
      </div>

      {/* Dot indicator */}
      <div className="mt-4 flex justify-center gap-1.5">
        {data.items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Select contribution ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active
                ? "w-4 bg-black dark:bg-white"
                : "w-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </SectionShell>
  );
}
