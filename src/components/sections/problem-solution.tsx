"use client";

import { X, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  {
    title: "Smart scheduling",
    desc: "Realistic deadlines, not wishful thinking",
  },
];

export function ProblemSolution() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Generate particles on client side only to avoid hydration mismatch
  const [chaosParticles, setChaosParticles] = useState<
    Array<{
      left: number;
      top: number;
      animationDelay: number;
      animationDuration: number;
      rotation: number;
      type: number;
    }>
  >([]);

  useEffect(() => {
    // Generate random particles only on client side
    setChaosParticles(
      Array.from({ length: 12 }, (_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: 3 + Math.random() * 4,
        rotation: Math.random() * 360,
        type: i % 3,
      }))
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section border-y border-border bg-muted relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Problem Side - Chaotic */}
          <div
            className={`transition-all duration-1000 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 mb-4">
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  The Problem
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1]">
                Drowning in
                <br />
                <span className="text-gray-700 dark:text-gray-300 relative inline-block">
                  tool chaos
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="12"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C40 2 80 8 120 4C160 0 180 6 198 8"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-gray-400"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most teams waste{" "}
                <span className="font-semibold text-foreground">
                  15+ hours weekly
                </span>{" "}
                on tool sprawl and coordination overhead.
              </p>
            </div>

            {/* Enhanced Chaos Visualization */}
            <div className="mb-10 bg-gradient-to-br from-background via-background to-gray-100 dark:to-gray-900 border border-border rounded-2xl p-8 h-64 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 via-transparent to-gray-300/50 dark:from-gray-800/50 dark:to-gray-700/50" />

              {/* Animated chaos particles */}
              <div className="absolute inset-0">
                {chaosParticles.map((particle, i) => (
                  <div
                    key={i}
                    className="absolute animate-float-chaotic"
                    style={{
                      left: `${particle.left}%`,
                      top: `${particle.top}%`,
                      animationDelay: `${particle.animationDelay}s`,
                      animationDuration: `${particle.animationDuration}s`,
                    }}
                  >
                    {particle.type === 0 ? (
                      <div
                        className="w-8 h-8 bg-gray-400/30 dark:bg-gray-600/40 rounded-lg blur-[1px]"
                        style={{
                          transform: `rotate(${particle.rotation}deg)`,
                        }}
                      />
                    ) : particle.type === 1 ? (
                      <div className="w-6 h-6 bg-gray-500/30 dark:bg-gray-500/40 rounded-full blur-[1px]" />
                    ) : (
                      <div
                        className="w-7 h-7 bg-gray-300/40 dark:bg-gray-700/40 rounded-sm blur-[1px]"
                        style={{
                          transform: `rotate(${particle.rotation}deg)`,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-30"
                viewBox="0 0 300 200"
              >
                <line
                  x1="20%"
                  y1="30%"
                  x2="80%"
                  y2="70%"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-400 dark:text-gray-600"
                  strokeDasharray="4 4"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="8"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  x1="70%"
                  y1="20%"
                  x2="30%"
                  y2="80%"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-400 dark:text-gray-600"
                  strokeDasharray="4 4"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="8"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  x1="50%"
                  y1="10%"
                  x2="50%"
                  y2="90%"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-400 dark:text-gray-600"
                  strokeDasharray="4 4"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </line>
              </svg>

              <div className="absolute top-4 right-4 text-xs font-bold text-gray-600 dark:text-gray-400 opacity-60 uppercase tracking-widest">
                CHAOS
              </div>
            </div>

            <div className="space-y-4">
              {problems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50 backdrop-blur-sm`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center shrink-0 mt-0.5">
                    <X
                      className="text-gray-600 dark:text-gray-400"
                      size={14}
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side - Organized */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  The Solution
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1]">
                One workspace.
                <br />
                <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                  Zero chaos.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                FlowTask consolidates your workflow into one{" "}
                <span className="font-semibold text-foreground">
                  fast, intelligent
                </span>{" "}
                platform.
              </p>
            </div>

            {/* Enhanced Order Visualization */}
            <div className="mb-10 bg-gradient-to-br from-background via-accent-light/20 to-accent-light/40 dark:from-background dark:via-accent/5 dark:to-accent/10 border border-accent/20 rounded-2xl p-8 h-64 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />

              {/* Organized grid */}
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-3 w-full max-w-xs">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square bg-gradient-to-br from-accent/20 to-accent-hover/20 rounded-lg border border-accent/30 transition-all duration-500 hover:scale-110 hover:bg-accent/30 ${
                        isVisible
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-75"
                      }`}
                      style={{
                        transitionDelay: `${600 + i * 50}ms`,
                        boxShadow: "0 2px 8px rgba(255, 87, 51, 0.1)",
                      }}
                    >
                      <div className="w-full h-full rounded-lg bg-gradient-to-br from-white/50 to-transparent dark:from-white/10" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Flow arrows */}
              <svg
                className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
                viewBox="0 0 300 200"
              >
                <defs>
                  <marker
                    id="arrowhead-solution"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3, 0 6"
                      fill="currentColor"
                      className="text-accent"
                    />
                  </marker>
                </defs>
                <path
                  d="M 120 100 L 180 100"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent/60"
                  markerEnd="url(#arrowhead-solution)"
                  strokeDasharray="4 4"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="8"
                    to="0"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>

              <div className="absolute top-4 right-4 text-xs font-bold text-accent opacity-80 uppercase tracking-widest">
                ORDER
              </div>
            </div>

            <div className="space-y-4">
              {solutions.map((item, i) => (
                <div
                  key={i}
                  className={`group flex items-start gap-4 p-5 border border-accent/20 bg-gradient-to-br from-background via-background to-accent-light/20 dark:to-accent/5 rounded-xl`}
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-accent/20">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="font-semibold text-base mb-1.5">
                      {item.title}
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-chaotic {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(-20px, -30px) rotate(90deg) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translate(30px, -20px) rotate(180deg) scale(0.8);
            opacity: 0.4;
          }
          75% {
            transform: translate(-15px, 25px) rotate(270deg) scale(1.1);
            opacity: 0.7;
          }
        }

        .animate-float-chaotic {
          animation: float-chaotic 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
