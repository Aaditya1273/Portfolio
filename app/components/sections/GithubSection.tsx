import { SectionShell } from "../SectionShell";
import { GithubGraph } from "../GithubGraph";

export interface GithubData {
  username: string;
}

export function GithubSection({ title, data }: { title: string; data: GithubData }) {
  return (
    <SectionShell title={title}>
      <GithubGraph username={data.username} />
    </SectionShell>
  );
}
