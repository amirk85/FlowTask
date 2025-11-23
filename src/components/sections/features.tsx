"use client";

import { motion } from "framer-motion";
import {
  Zap,
  LayoutDashboard,
  Users,
  Workflow,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "AI Auto-Scheduling",
    description:
      "Our engine analyzes your team's velocity and automatically assigns deadlines that are actually realistic.",
    icon: Zap,
    color: "text-amber-500",
    delay: 0.1,
  },
  {
    title: "Kanban & Gantt",
    description:
      "Switch between views instantly. See the big picture or focus on the daily grind with one click.",
    icon: LayoutDashboard,
    color: "text-brand-teal",
    delay: 0.2,
  },
  {
    title: "Real-time Collab",
    description:
      "Multiplayer mode by default. See who is typing, comment in threads, and never override work.",
    icon: Users,
    color: "text-brand-blue",
    delay: 0.3,
  },
  {
    title: "Automated Workflows",
    description:
      "Trigger actions based on status changes. Move a card to 'Done' and automatically notify the client.",
    icon: Workflow,
    color: "text-purple-500",
    delay: 0.4,
  },
  {
    title: "Enterprise Security",
    description:
      "SOC2 Type II certified. Role-based access control (RBAC) and data encryption at rest.",
    icon: ShieldCheck,
    color: "text-emerald-500",
    delay: 0.5,
  },
  {
    title: "Smart Analytics",
    description:
      "Don't just track hours. Track impact. Visualize bottlenecks before they become blockers.",
    icon: BarChart3,
    color: "text-rose-500",
    delay: 0.6,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to{" "}
            <span className="text-gradient">ship faster</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Built for modern software teams who care about speed, design, and
            developer experience.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              className="group p-8 rounded-2xl border border-border bg-card hover:shadow-lg hover:shadow-brand-teal/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Hover Gradient Blob */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-teal/10 rounded-full blur-3xl group-hover:bg-brand-teal/20 transition-colors duration-500" />

              <div
                className={`mb-4 p-3 rounded-lg bg-muted w-fit group-hover:scale-110 transition-transform duration-300 ${feature.color}`}
              >
                <feature.icon size={24} />
              </div>

              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
