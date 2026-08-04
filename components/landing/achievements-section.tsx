"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    title: "MetaMask Grant",
    amount: "$575",
    description: "Awarded for developing innovative blockchain monitoring tools and AI-driven security solutions.",
    category: "Grant",
    year: "2024",
  },
  {
    title: "Flow Foundation Grant",
    amount: "$300",
    description: "Recognition for building decentralized applications on the Flow blockchain ecosystem.",
    category: "Grant",
    year: "2024",
  },
  {
    title: "OneChain Fellowship Grant",
    amount: "$1,000",
    description: "Selected for advanced work in multi-chain architecture and interoperability solutions.",
    category: "Grant",
    year: "2024",
  },
  {
    title: "Hackathon Winner",
    description: "Won multiple hackathons for innovative AI agent implementations and blockchain solutions.",
    category: "Competition",
    year: "2023-2024",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-20 lg:py-32 bg-muted/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Grants and recognition for innovative work in AI, blockchain, and distributed systems.
          </p>
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((achievement, i) => (
            <Card
              key={i}
              className="p-8 bg-background border border-border hover:border-foreground/50 transition-colors relative overflow-hidden group"
            >
              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="capitalize">
                    {achievement.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {achievement.year}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>

                {achievement.amount && (
                  <p className="text-3xl font-display text-foreground mb-3">
                    {achievement.amount}
                  </p>
                )}

                <p className="text-foreground/70 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
