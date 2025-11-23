"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* The Problem (Left) */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Stop managing work in{" "}
                <span className="text-red-500 decoration-red-500/30 underline underline-offset-4">
                  chaos mode
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Most teams are stuck in endless status meetings and drowning in
                Slack messages. It's not your fault—your tools are broken.
              </p>

              <div className="space-y-4">
                {[
                  "Information scattered across 5+ apps",
                  "No visibility into who is working on what",
                  "Projects constantly missing deadlines",
                  "Team burnout from manual status updates",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <XCircle className="text-red-500 shrink-0" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* The Solution (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glass Card Effect */}
            <div className="glass rounded-2xl p-8 md:p-10 border border-brand-teal/20 shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="50"
                    fill="currentColor"
                    className="text-brand-teal"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-brand-teal text-white p-1 rounded">
                  <CheckCircle2 size={20} />
                </span>
                The FlowTask Way
              </h3>

              <div className="space-y-6">
                <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-brand-teal mb-1">
                    Centralized Source of Truth
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Tasks, Docs, and Chat in one unified interface.
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-brand-teal mb-1">
                    AI-Driven Insights
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Predict delays weeks before they happen.
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-brand-teal mb-1">
                    Automated Reporting
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Weekly summaries generated for you automatically.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
