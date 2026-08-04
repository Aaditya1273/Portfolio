"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Flow Sentinel",
    description: "Real-time Solana blockchain monitoring and anomaly detection system using AI agents for transaction analysis.",
    tech: ["Python", "Solana", "AI Agents", "Real-time Processing"],
    link: "#",
  },
  {
    name: "AgentMD",
    description: "Medical AI assistant platform that helps healthcare providers with patient information management and diagnostics.",
    tech: ["TypeScript", "Next.js", "AI/ML", "Healthcare"],
    link: "#",
  },
  {
    name: "GhostPay",
    description: "Privacy-first payment processing system with advanced encryption and anonymous transaction routing.",
    tech: ["Go", "Cryptography", "Payment Systems", "Python"],
    link: "#",
  },
  {
    name: "Argus",
    description: "Distributed security monitoring platform for detecting and responding to infrastructure threats in real-time.",
    tech: ["Python", "Go", "Security", "Distributed Systems"],
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of products and systems I&apos;ve built, ranging from AI agents to distributed infrastructure.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <Card 
              key={i}
              className="group relative overflow-hidden bg-card hover:bg-card/80 transition-all duration-300 border border-border hover:border-foreground/50 p-8"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-display mb-3 text-foreground group-hover:text-foreground transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-foreground/10 text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn"
                  asChild
                >
                  <a href={project.link}>
                    View project
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
