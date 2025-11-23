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
