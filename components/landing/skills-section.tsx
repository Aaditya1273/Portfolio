"use client";

import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Go", "Rust", "SQL"],
  },
  {
    category: "AI & Agents",
    skills: ["LangChain", "OpenAI API", "Claude", "Groq", "Agent Architecture", "RAG Systems"],
  },
  {
    category: "Blockchain",
    skills: ["Solana", "Web3.js", "Smart Contracts", "Cryptography", "DeFi Protocols"],
  },
  {
    category: "Backend",
    skills: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Microservices", "REST APIs"],
  },
  {
    category: "Frontend",
    skills: ["React", "Tailwind CSS", "UI/UX Design", "Responsive Design", "Web Performance"],
  },
  {
    category: "DevOps & Infrastructure",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Linux"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 lg:py-32 bg-muted/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive overview of technologies and tools I work with across Web3 full-stack development and autonomous AI systems.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.category}
              className="p-6 bg-background border border-border hover:border-foreground/50 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full bg-foreground/10 text-foreground/80 hover:bg-foreground/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
