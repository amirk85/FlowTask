"use client";

const testimonials = [
  {
    quote: "FlowTask changed how we ship. The AI scheduling actually works, unlike other tools we tried.",
    author: "Sarah Jenkins",
    role: "CTO, TechStart",
  },
  {
    quote: "Saves me 10 hours a week on admin work. The automated reporting is genuinely useful.",
    author: "Marcus Chen",
    role: "PM, DevCorp",
  },
  {
    quote: "Best UI in project management. Built by people who actually write code.",
    author: "Elena Rodriguez",
    role: "Frontend Lead, Designify",
  },
];

export function Testimonials() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Loved by builders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-8 border border-border rounded-lg bg-background"
            >
              <p className="text-lg mb-8 leading-relaxed">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-xl">
                  {item.author[0]}
                </div>
                <div>
                  <div className="font-semibold">{item.author}</div>
                  <div className="text-sm text-muted-foreground">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
