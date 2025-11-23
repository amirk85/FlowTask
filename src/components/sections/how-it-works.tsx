"use client";

const steps = [
  {
    number: "01",
    title: "Connect your tools",
    description:
      "One-click integrations with GitHub, Slack, and Figma. Import existing data automatically.",
  },
  {
    number: "02",
    title: "Let AI organize",
    description:
      "Our AI analyzes your team's velocity and builds realistic schedules. No manual estimation.",
  },
  {
    number: "03",
    title: "Ship faster",
    description:
      "Focus on building. FlowTask handles status updates, reminders, and reports.",
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
            <div key={index} className="space-y-4">
              <div className="font-display font-bold text-5xl text-muted-foreground/20">
                {step.number}
              </div>
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
