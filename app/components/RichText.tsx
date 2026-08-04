import type { ReactNode } from "react";
import type { Block } from "./types";

/**
 * Parse a markdown string supporting inline **bold** and [text](url) links
 * into React nodes. Intentionally minimal — just the two constructs used
 * across the portfolio content.
 */
function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*([\s\S]+?)\*\*)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));

    if (match[2] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-medium text-black dark:text-white">
          {match[2]}
        </strong>
      );
    } else if (match[4] !== undefined) {
      nodes.push(
        <a
          key={key++}
          href={match[5]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors"
        >
          {match[4]}
        </a>
      );
    }
    last = regex.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Render a single markdown string inline (no wrapping element). */
export function Inline({ text }: { text: string }) {
  return <>{parseInline(text)}</>;
}

/**
 * Render an array of `Block`s — markdown paragraphs and bulleted lists.
 * Returns a fragment so callers control the wrapping/spacing container.
 */
export function RichText({
  blocks,
  pClassName,
  listClassName = "list-disc list-inside space-y-1 pl-2",
}: {
  blocks: Block[];
  pClassName?: string;
  listClassName?: string;
}) {
  return (
    <>
      {blocks.map((block, i) =>
        typeof block === "string" ? (
          <p key={i} className={pClassName}>
            {parseInline(block)}
          </p>
        ) : (
          <ul key={i} className={listClassName}>
            {block.list.map((item, j) => (
              <li key={j}>{parseInline(item)}</li>
            ))}
          </ul>
        )
      )}
    </>
  );
}
