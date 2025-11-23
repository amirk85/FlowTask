"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does the AI scheduling actually work?",
    answer:
      "Our AI analyzes your team's historical velocity and GitHub activity to estimate task complexity. It then auto-assigns tasks based on real availability, not just empty calendar slots.",
  },
  {
    question: "Can I import data from Jira or Trello?",
    answer:
      "Yes! We offer one-click migrations for Jira, Trello, Asana, and Notion. We preserve all your comments, attachments, and status history.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We are SOC2 Type II compliant and encrypt all data at rest and in transit (AES-256). We perform daily backups and regular penetration testing.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, the Pro plan comes with a 14-day free trial. No credit card is required to start. You can downgrade to the Free plan at any time.",
  },
  {
    question: "Does FlowTask work for non-technical teams?",
    answer:
      "While we optimize for software teams (with GitHub/GitLab integrations), marketing and design teams love our visual Kanban boards and automated reporting features.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left font-medium"
              >
                {faq.question}
                <ChevronDown
                  className={cn(
                    "transition-transform duration-300 text-muted-foreground",
                    openIndex === index ? "rotate-180" : "rotate-0",
                  )}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
