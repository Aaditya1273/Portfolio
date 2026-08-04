"use client";

import { useState } from "react";
import { ArrowUpRight, Download, ExternalLink } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { RichText } from "../RichText";
import type { Block } from "../types";

export interface ProjectItem {
  name: string;
  subtitle?: string;
  logo?: string;
  link?: string;
  downloadUrl?: string;
  downloadLabel?: string;
  tags?: string[];
  body: Block[];
  stats?: { value: string; label: string }[];
}

export interface ProjectsData {
  items: ProjectItem[];
}

export function ProjectsSection({
  title,
  data,
}: {
  title: string;
  data: ProjectsData;
}) {
  const [active, setActive] = useState(0);
  const project = data.items[active];

  return (
    <SectionShell title={title}>
      {/* Tab strip */}
      <div className="mb-6 flex flex-wrap gap-2">
        {data.items.map((item, i) => (
          <button
            key={item.name}
            onClick={() => setActive(i)}
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
              i === active
                ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                : "border-gray-200 bg-transparent text-gray-500 hover:border-gray-400 hover:text-black dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-white"
            }`}
          >
            {item.logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.logo}
                alt=""
                className={`h-4 w-4 rounded-sm object-contain ${
                  i === active ? "brightness-0 invert dark:brightness-100 dark:invert-0" : ""
                }`}
              />
            )}
            {item.name}
          </button>
        ))}
      </div>

      {/* Active project card */}
      <div
        key={project.name}
        className="animate-in fade-in duration-200 rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8"
      >
        {/* Header */}
        <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            {project.logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.logo}
                alt={project.name}
                className="mt-0.5 h-10 w-10 shrink-0 rounded-xl object-contain border border-gray-100 dark:border-gray-800 p-1 bg-white dark:bg-gray-900"
                loading="lazy"
              />
            )}
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-lg font-semibold text-black dark:text-white">
                  {project.name}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              {project.subtitle && (
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                  {project.subtitle}
                </span>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 px-3.5 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:border-gray-400 hover:text-black dark:hover:text-white transition-all"
              >
                Visit <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                download
                className="inline-flex items-center gap-1.5 rounded-full bg-black dark:bg-white px-3.5 py-1.5 text-xs font-medium text-white dark:text-black hover:opacity-80 transition-opacity"
              >
                <Download className="h-3.5 w-3.5" />
                {project.downloadLabel ?? "Download"}
              </a>
            )}
          </div>
        </div>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
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
          <RichText blocks={project.body} />
        </div>

        {/* Stats */}
        {project.stats && project.stats.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 border-t border-gray-100 dark:border-gray-800 pt-6">
            {project.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold tabular-nums text-black dark:text-white">
                  {s.value}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dot indicator */}
      <div className="mt-4 flex justify-center gap-1.5">
        {data.items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Select project ${i + 1}`}
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
