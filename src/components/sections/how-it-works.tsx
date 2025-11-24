"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Connect your tools",
    description:
      "One-click integrations with GitHub, Slack, and Figma. Import existing data automatically.",
    visual: (isVisible: boolean, index: number) => (
      <svg viewBox="0 0 200 140" className="w-full h-full">
        {/* Outer satellites */}
        <g className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${300 + index * 200}ms` }}>
          <circle cx="40" cy="70" r="18" fill="currentColor" className="text-gray-200 dark:text-gray-800" />
          <circle cx="40" cy="70" r="12" fill="currentColor" className="text-gray-300 dark:text-gray-700" />

          <circle cx="160" cy="70" r="18" fill="currentColor" className="text-gray-200 dark:text-gray-800" />
          <circle cx="160" cy="70" r="12" fill="currentColor" className="text-gray-300 dark:text-gray-700" />

          <circle cx="100" cy="20" r="18" fill="currentColor" className="text-gray-200 dark:text-gray-800" />
          <circle cx="100" cy="20" r="12" fill="currentColor" className="text-gray-300 dark:text-gray-700" />

          <circle cx="100" cy="120" r="18" fill="currentColor" className="text-gray-200 dark:text-gray-800" />
          <circle cx="100" cy="120" r="12" fill="currentColor" className="text-gray-300 dark:text-gray-700" />
        </g>

        {/* Connecting lines with animation */}
        <g className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${500 + index * 200}ms` }}>
          <line x1="58" y1="70" x2="70" y2="70" stroke="currentColor" strokeWidth="2" className="text-accent/60" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="130" y1="70" x2="142" y2="70" stroke="currentColor" strokeWidth="2" className="text-accent/60" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="38" x2="100" y2="50" stroke="currentColor" strokeWidth="2" className="text-accent/60" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="90" x2="100" y2="102" stroke="currentColor" strokeWidth="2" className="text-accent/60" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Center hub */}
        <g className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} style={{ transitionDelay: `${700 + index * 200}ms`, transformOrigin: 'center' }}>
          <circle cx="100" cy="70" r="35" fill="currentColor" className="text-accent/10" />
          <circle cx="100" cy="70" r="25" fill="currentColor" className="text-accent/20" />
          <circle cx="100" cy="70" r="12" fill="currentColor" className="text-accent">
            <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Let AI organize",
    description:
      "Our AI analyzes your team's velocity and builds realistic schedules. No manual estimation.",
    visual: (isVisible: boolean, index: number) => (
      <svg viewBox="0 0 200 140" className="w-full h-full">
        {/* Bars */}
        <g className={`transition-all duration-700`}>
          <rect x="20" y="60" width="35" height="60" rx="6" fill="currentColor"
            className={`text-gray-200 dark:text-gray-800 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${200 + index * 200}ms` }} />

          <rect x="70" y="50" width="35" height="70" rx="6" fill="currentColor"
            className={`text-gray-300 dark:text-gray-700 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${300 + index * 200}ms` }} />

          <rect x="120" y="30" width="35" height="90" rx="6" fill="currentColor"
            className={`text-accent/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${400 + index * 200}ms` }} />

          <rect x="170" y="20" width="10" height="100" rx="5" fill="currentColor"
            className={`text-accent transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${500 + index * 200}ms` }}>
            <animate attributeName="height" values="100;105;100" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y" values="20;15;20" dur="2s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Trend line */}
        <path d="M 37 100 Q 90 70 145 50" stroke="currentColor" strokeWidth="3" fill="none"
          className={`text-accent transition-all duration-1000 ${isVisible ? 'opacity-60' : 'opacity-0'}`}
          style={{ transitionDelay: `${600 + index * 200}ms` }}
          strokeDasharray="200"
          strokeDashoffset={isVisible ? "0" : "200"}>
        </path>

        {/* AI badge */}
        <g className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ transitionDelay: `${700 + index * 200}ms`, transformOrigin: 'center' }}>
          <circle cx="175" cy="50" r="20" fill="currentColor" className="text-accent" />
          <text x="175" y="56" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">AI</text>
          <circle cx="175" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent/40">
            <animate attributeName="r" values="22;26;22" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Ship faster",
    description:
      "Focus on building. FlowTask handles status updates, reminders, and reports.",
    visual: (isVisible: boolean, index: number) => (
      <svg viewBox="0 0 200 140" className="w-full h-full">
        {/* Progress track */}
        <line x1="30" y1="70" x2="170" y2="70" stroke="currentColor" strokeWidth="3"
          className={`text-gray-200 dark:text-gray-800 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: `${200 + index * 200}ms` }} />

        {/* Milestones */}
        <g className={`transition-all duration-700`}>
          <circle cx="40" cy="70" r="10" fill="currentColor"
            className={`text-accent transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            style={{ transitionDelay: `${300 + index * 200}ms` }} />
          <circle cx="40" cy="70" r="6" fill="white" />

          <circle cx="100" cy="70" r="10" fill="currentColor"
            className={`text-accent transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            style={{ transitionDelay: `${400 + index * 200}ms` }} />
          <circle cx="100" cy="70" r="6" fill="white" />

          <circle cx="160" cy="70" r="10" fill="currentColor"
            className={`text-accent transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            style={{ transitionDelay: `${500 + index * 200}ms` }} />
          <circle cx="160" cy="70" r="6" fill="white" />
        </g>

        {/* Rocket */}
        <g className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          style={{ transitionDelay: `${600 + index * 200}ms` }}>
          <path d="M 165 45 L 180 70 L 165 95 L 170 70 Z" fill="currentColor" className="text-accent" />
          <circle cx="160" cy="70" r="8" fill="currentColor" className="text-accent-hover" />

          {/* Exhaust trail */}
          <path d="M 155 70 L 145 70" stroke="currentColor" strokeWidth="4" className="text-accent/40" strokeLinecap="round">
            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="0.8s" repeatCount="indefinite" />
          </path>
          <path d="M 142 70 L 132 70" stroke="currentColor" strokeWidth="3" className="text-accent/20" strokeLinecap="round">
            <animate attributeName="opacity" values="0.3;0.05;0.3" dur="0.8s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Success checkmark */}
        <g className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
          style={{ transitionDelay: `${800 + index * 200}ms`, transformOrigin: 'center' }}>
          <circle cx="175" cy="40" r="15" fill="currentColor" className="text-accent/20" />
          <path d="M 168 40 L 173 45 L 182 33" stroke="currentColor" strokeWidth="3" fill="none"
            className="text-accent" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    ),
  },
];

export function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section border-y border-border bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container-custom">
        <div className={`max-w-2xl mb-16 md:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Simple Process
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1]">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Get started in minutes, not days. Three simple steps to transform your workflow.
          </p>
        </div>

        {/* Steps with connecting flow line */}
        <div className="relative">
          {/* Connecting line between steps (hidden on mobile) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            style={{ top: '160px' }}>
            <div className={`h-full bg-gradient-to-r from-accent/60 via-accent to-accent/60 transition-all duration-2000 origin-left ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`} style={{ transitionDelay: '800ms' }} />
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group space-y-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Visual */}
                <div className="relative bg-gradient-to-br from-background via-background to-accent-light/10 dark:to-accent/5 border border-border rounded-2xl p-8 h-56 flex items-center justify-center overflow-hidden group-hover:border-accent/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-full h-full">
                    {step.visual(isVisible, index)}
                  </div>
                </div>

                {/* Step indicator with number */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="font-display font-bold text-6xl text-gray-200 dark:text-gray-800 select-none">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 font-display font-bold text-6xl bg-gradient-to-br from-accent to-accent-hover bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {step.number}
                    </div>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-display font-semibold text-2xl group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div className={`mt-16 md:mt-20 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-sm text-muted-foreground">
            Ready to streamline your workflow?{" "}
            <span className="text-accent font-semibold hover:text-accent-hover transition-colors cursor-pointer">
              Start your free trial →
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
