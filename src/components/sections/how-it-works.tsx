"use client";

const steps = [
  {
    number: "01",
    title: "Connect your tools",
    description:
      "One-click integrations with GitHub, Slack, and Figma. Import existing data automatically.",
    visual: (
      <svg viewBox="0 0 200 120" className="w-full h-32">
        <circle cx="100" cy="60" r="30" fill="currentColor" className="text-accent/20" />
        <circle cx="40" cy="60" r="20" fill="currentColor" className="text-muted" />
        <circle cx="160" cy="60" r="20" fill="currentColor" className="text-muted" />
        <circle cx="100" cy="20" r="20" fill="currentColor" className="text-muted" />
        <circle cx="100" cy="100" r="20" fill="currentColor" className="text-muted" />
        <line x1="60" y1="60" x2="70" y2="60" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <line x1="130" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <line x1="100" y1="40" x2="100" y2="30" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <line x1="100" y1="80" x2="100" y2="90" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <circle cx="100" cy="60" r="8" fill="currentColor" className="text-accent" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Let AI organize",
    description:
      "Our AI analyzes your team's velocity and builds realistic schedules. No manual estimation.",
    visual: (
      <svg viewBox="0 0 200 120" className="w-full h-32">
        <rect x="20" y="30" width="40" height="60" rx="4" fill="currentColor" className="text-muted/30" />
        <rect x="80" y="40" width="40" height="50" rx="4" fill="currentColor" className="text-muted/30" />
        <rect x="140" y="20" width="40" height="70" rx="4" fill="currentColor" className="text-accent/20" />
        <path d="M 30 90 L 100 20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-accent" />
        <circle cx="100" cy="20" r="6" fill="currentColor" className="text-accent" />
        <text x="150" y="15" fontSize="12" fill="currentColor" className="text-accent font-bold">AI</text>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Ship faster",
    description:
      "Focus on building. FlowTask handles status updates, reminders, and reports.",
    visual: (
      <svg viewBox="0 0 200 120" className="w-full h-32">
        <path d="M 20 60 L 180 60" stroke="currentColor" strokeWidth="2" className="text-muted/30" />
        <circle cx="40" cy="60" r="8" fill="currentColor" className="text-muted/50" />
        <circle cx="100" cy="60" r="8" fill="currentColor" className="text-muted/50" />
        <circle cx="160" cy="60" r="8" fill="currentColor" className="text-accent" />
        <path d="M 150 50 L 170 60 L 150 70 Z" fill="currentColor" className="text-accent" />
        <text x="165" y="45" fontSize="16" fill="currentColor" className="text-accent font-bold">✓</text>
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="section border-y border-border bg-muted">
      <div className="container-custom">
        <div className="max-w-2xl mb-20">
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-6">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Get started in minutes, not days.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="space-y-6">
              {/* Visual */}
              <div className="bg-background border border-border rounded-lg p-6 h-40 flex items-center justify-center">
                {step.visual}
              </div>

              {/* Number */}
              <div className="font-display font-bold text-5xl text-muted-foreground/20">
                {step.number}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
