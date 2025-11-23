"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How does AI scheduling work?",
    answer:
      "FlowTask analyzes your team's historical velocity and GitHub activity to estimate task complexity. It assigns realistic deadlines based on actual availability, not empty calendar slots.",
  },
  {
    question: "Can I import from Jira or Trello?",
    answer:
      "Yes. One-click migrations from Jira, Trello, Asana, and Notion. We preserve all comments, attachments, and history.",
  },
  {
    question: "Is my data secure?",
    answer:
      "SOC2 Type II compliant. All data encrypted at rest (AES-256) and in transit. Daily backups and regular penetration testing.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "14-day free trial on the Pro plan. No credit card required. Downgrade to Free anytime.",
  },
  {
    question: "Does it work for non-technical teams?",
    answer:
      "While optimized for software teams, marketing and design teams use our visual Kanban and automated reporting features.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section border-y border-border bg-muted">
      <div className="container-custom max-w-3xl">
        <div className="mb-16">
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-6">
            FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg bg-background overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left font-semibold hover:bg-muted/50 transition-colors"
              >
                <span>{faq.question}</span>
                <Plus
                  size={20}
                  className={`shrink-0 ml-4 transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
