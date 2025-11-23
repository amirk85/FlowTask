"use client";

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
    title: "AI auto-scheduling",
    description: "Realistic deadlines based on your team's actual velocity, not guesses.",
    icon: Zap,
  },
  {
    title: "Multiple views",
    description: "Switch between Kanban, Gantt, and list views instantly.",
    icon: LayoutDashboard,
  },
  {
    title: "Real-time collaboration",
    description: "See who's working on what. Comment, assign, update in real-time.",
    icon: Users,
  },
  {
    title: "Automated workflows",
    description: "Trigger actions based on status changes. No manual busywork.",
    icon: Workflow,
  },
  {
    title: "Enterprise security",
    description: "SOC2 Type II certified. RBAC, SSO, and encryption at rest.",
    icon: ShieldCheck,
  },
  {
    title: "Smart analytics",
    description: "Identify bottlenecks before they become blockers.",
    icon: BarChart3,
  },
];

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Everything you need
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Built for teams who ship software. No bloat, no unnecessary features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="w-12 h-12 rounded-lg border border-border flex items-center justify-center">
                <feature.icon size={24} className="text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
