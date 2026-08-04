import type { ReactNode } from "react";

/**
 * Consistent shell for every titled section: an uppercase heading followed by
 * the section body. Sections without a heading (e.g. the hero) skip this.
 */
export function SectionShell({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-16 w-full text-left ${className}`}>
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300">
        {title}
      </h2>
      {children}
    </div>
  );
}
