"use client";

import { X, Check } from "lucide-react";

const problems = [
  "Context switching between 5+ tools daily",
  "No visibility into team workload",
  "Status meetings that could be avoided",
  "Manual reporting and updates",
];

const solutions = [
  { title: "Unified workspace", desc: "Tasks, docs, chat in one place" },
  { title: "Real-time visibility", desc: "See who's working on what, always" },
  { title: "Auto status updates", desc: "AI generates reports for you" },
  { title: "Smart scheduling", desc: "Realistic deadlines, not wishful thinking" },
];

export function ProblemSolution() {
  return (
    <section className="section border-y border-border bg-muted">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Problem */}
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              The problem
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Most teams waste hours every week on tool sprawl and coordination overhead.
            </p>

            {/* Chaos Visualization */}
            <div className="mb-8 bg-background border border-border rounded-lg p-6 h-48 relative overflow-hidden">
              <svg viewBox="0 0 300 150" className="w-full h-full">
                {/* Scattered, chaotic elements */}
                <circle cx="40" cy="40" r="15" fill="currentColor" className="text-muted opacity-50" />
                <rect x="100" y="20" width="30" height="30" fill="currentColor" className="text-muted opacity-50" transform="rotate(15 115 35)" />
                <circle cx="200" cy="50" r="12" fill="currentColor" className="text-muted opacity-50" />
                <rect x="60" y="80" width="25" height="25" fill="currentColor" className="text-muted opacity-50" transform="rotate(-20 72 92)" />
                <circle cx="150" cy="90" r="18" fill="currentColor" className="text-muted opacity-50" />
                <rect x="220" y="100" width="35" height="35" fill="currentColor" className="text-muted opacity-50" transform="rotate(30 237 117)" />
                <circle cx="90" cy="120" r="10" fill="currentColor" className="text-muted opacity-50" />
                <rect x="180" y="115" width="20" height="20" fill="currentColor" className="text-muted opacity-50" transform="rotate(-10 190 125)" />

                {/* Random connecting lines */}
                <line x1="40" y1="40" x2="100" y2="35" stroke="currentColor" strokeWidth="1" className="text-muted-foreground opacity-20" strokeDasharray="3 3" />
                <line x1="150" y1="90" x2="200" y2="50" stroke="currentColor" strokeWidth="1" className="text-muted-foreground opacity-20" strokeDasharray="3 3" />
                <line x1="60" y1="80" x2="90" y2="120" stroke="currentColor" strokeWidth="1" className="text-muted-foreground opacity-20" strokeDasharray="3 3" />
              </svg>
              <div className="absolute top-4 right-4 text-xs font-semibold text-muted-foreground opacity-50">CHAOS</div>
            </div>

            <div className="space-y-4">
              {problems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="text-foreground shrink-0 mt-1" size={20} strokeWidth={2.5} />
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              The solution
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              FlowTask consolidates your workflow into one fast, intelligent platform.
            </p>

            {/* Order Visualization */}
            <div className="mb-8 bg-background border border-accent/30 rounded-lg p-6 h-48 relative overflow-hidden">
              <svg viewBox="0 0 300 150" className="w-full h-full">
                {/* Organized grid of elements */}
                <rect x="30" y="30" width="50" height="50" rx="4" fill="currentColor" className="text-accent/20" />
                <rect x="100" y="30" width="50" height="50" rx="4" fill="currentColor" className="text-accent/20" />
                <rect x="170" y="30" width="50" height="50" rx="4" fill="currentColor" className="text-accent/20" />
                <rect x="240" y="30" width="50" height="50" rx="4" fill="currentColor" className="text-accent/20" />

                <rect x="30" y="90" width="50" height="50" rx="4" fill="currentColor" className="text-accent/10" />
                <rect x="100" y="90" width="50" height="50" rx="4" fill="currentColor" className="text-accent/10" />
                <rect x="170" y="90" width="50" height="50" rx="4" fill="currentColor" className="text-accent/10" />
                <rect x="240" y="90" width="50" height="50" rx="4" fill="currentColor" className="text-accent/10" />

                {/* Organized flow */}
                <path d="M 155 55 L 165 55" stroke="currentColor" strokeWidth="2" className="text-accent" markerEnd="url(#arrowhead)" />
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="text-accent" />
                  </marker>
                </defs>
              </svg>
              <div className="absolute top-4 right-4 text-xs font-semibold text-accent">ORDER</div>
            </div>

            <div className="space-y-6">
              {solutions.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border border-border bg-background rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
