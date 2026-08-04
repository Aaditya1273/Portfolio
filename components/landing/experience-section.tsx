"use client";

import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Open Source Contributions",
    organization: "Metasploit & Django CMS",
    description: "Contributed significant features and bug fixes to major open-source security and CMS projects, improving code quality and maintainability.",
    highlights: [
      "Security vulnerability assessments",
      "Feature implementation and optimization",
      "Code review and documentation",
    ],
  },
  {
    title: "Volunteer Developer",
    organization: "Tech for Good Initiative",
    description: "Developed and maintained applications for non-profit organizations focused on education and social impact in underserved communities.",
    highlights: [
      "Built scalable web platforms",
      "Mentored junior developers",
      "Designed user-centric solutions",
    ],
  },
  {
    title: "AI Agent Development",
    organization: "Independent Projects",
    description: "Specialized in designing and implementing autonomous AI agents for blockchain monitoring, healthcare applications, and security systems.",
    highlights: [
      "Advanced agent architecture",
      "Real-time data processing",
      "Integration with third-party APIs",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My professional journey includes open-source contributions, volunteer work, and specialized AI development.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Card
              key={i}
              className="p-8 bg-card border border-border hover:border-foreground/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {exp.organization}
                  </p>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-sm px-3 py-1 rounded-full bg-foreground/10 text-foreground/70"
                  >
                    {highlight}
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
