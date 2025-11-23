"use client";

import { motion } from "framer-motion";
import { Download, Settings, PlayCircle } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Connect your workspace",
    description:
      "Integrate with GitHub, Slack, and Figma in one click. We import your existing data automatically.",
    icon: Download,
  },
  {
    id: "02",
    title: "Configure AI Workflows",
    description:
      "Set your team's working hours and velocity. Our AI builds the perfect schedule for your sprint.",
    icon: Settings,
  },
  {
    id: "03",
    title: "Start Sprinting",
    description:
      "Focus on code, not management. FlowTask handles the updates, reminders, and reports.",
    icon: PlayCircle,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From Chaos to Clarity in{" "}
            <span className="text-brand-teal">3 Steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center relative bg-background pt-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted border border-border flex items-center justify-center mb-6 shadow-lg shadow-brand-teal/5 text-brand-teal z-10">
                <step.icon size={32} />
              </div>

              <div className="absolute top-0 right-[50%] translate-x-1/2 -translate-y-1/2 text-9xl font-bold opacity-[0.03] select-none">
                {step.id}
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
