"use client";

import {
  Zap,
  LayoutDashboard,
  Users,
  Workflow,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isVisible: boolean;
}

function FeatureCard({ feature, index, isVisible }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative h-full p-8 rounded-2xl border border-border bg-background transition-all duration-200 group-hover:border-accent/40 group-hover:shadow-2xl group-hover:shadow-accent/10 group-hover:-translate-y-2">
        {/* Gradient overlay on hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Accent line at top */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/60 transition-all duration-500" />

        {/* Content */}
        <div className="relative space-y-4">
          {/* Icon container with animated background */}
          <div className="relative inline-block">
            <div className="w-14 h-14 rounded-xl border border-border bg-background flex items-center justify-center transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent/5 group-hover:scale-110 group-hover:rotate-3">
              <Icon
                size={28}
                className="text-foreground transition-all duration-500 group-hover:text-accent group-hover:scale-110"
                strokeWidth={1.5}
              />
            </div>

            {/* Animated ring on hover */}
            <div className="absolute inset-0 rounded-xl border-2 border-accent/40 scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
          </div>

          {/* Text content */}
          <div className="space-y-2 pt-2">
            <h3 className="font-display font-semibold text-xl transition-colors duration-300 group-hover:text-accent">
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>

          {/* Hover indicator */}
          <div className="flex items-center gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Learn more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const features: Feature[] = [
  {
    title: "AI auto-scheduling",
    description:
      "Realistic deadlines based on your team's actual velocity, not guesses.",
    icon: Zap,
    gradient: "from-accent/20 to-accent-hover/20",
  },
  {
    title: "Multiple views",
    description: "Switch between Kanban, Gantt, and list views instantly.",
    icon: LayoutDashboard,
    gradient: "from-accent/15 to-accent/20",
  },
  {
    title: "Real-time collaboration",
    description:
      "See who's working on what. Comment, assign, update in real-time.",
    icon: Users,
    gradient: "from-accent-hover/20 to-accent/15",
  },
  {
    title: "Automated workflows",
    description: "Trigger actions based on status changes. No manual busywork.",
    icon: Workflow,
    gradient: "from-accent/10 to-accent-hover/15",
  },
  {
    title: "Enterprise security",
    description: "SOC2 Type II certified. RBAC, SSO, and encryption at rest.",
    icon: ShieldCheck,
    gradient: "from-accent/20 to-accent/10",
  },
  {
    title: "Smart analytics",
    description: "Identify bottlenecks before they become blockers.",
    icon: BarChart3,
    gradient: "from-accent-hover/15 to-accent/20",
  },
];

export function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="section relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div
          className={`max-w-2xl mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Everything you need.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Built for teams who ship software. No bloat, no unnecessary
            features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div
          className={`mt-16 md:mt-20 flex justify-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <div
              className="w-2 h-2 rounded-full bg-accent animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-2 h-2 rounded-full bg-accent animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
