"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for individuals and side projects.",
    features: [
      "Up to 3 Projects",
      "Basic AI Suggestions",
      "7-day History",
      "Community Support",
    ],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 29, annual: 24 },
    description: "For growing teams that need speed.",
    features: [
      "Unlimited Projects",
      "Advanced AI Workflows",
      "Unlimited History",
      "Priority Support",
      "Guest Access",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Business",
    price: { monthly: 99, annual: 79 },
    description: "For large organizations with strict security.",
    features: [
      "SSO & SAML",
      "Dedicated Success Manager",
      "Custom AI Training",
      "SLA Guarantees",
      "Audit Logs",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header & Toggle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple, transparent pricing
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                !isAnnual ? "text-foreground" : "text-muted-foreground",
              )}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-muted rounded-full relative p-1 transition-colors hover:bg-muted/80"
            >
              <div
                className={cn(
                  "w-5 h-5 bg-brand-teal rounded-full shadow-sm transition-all",
                  isAnnual ? "translate-x-7" : "translate-x-0",
                )}
              />
            </button>
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                isAnnual ? "text-foreground" : "text-muted-foreground",
              )}
            >
              Annual{" "}
              <span className="text-brand-teal text-xs ml-1 font-bold">
                (Save 20%)
              </span>
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative p-8 rounded-2xl border bg-card flex flex-col",
                tier.popular
                  ? "border-brand-teal shadow-lg shadow-brand-teal/10 scale-105 z-10"
                  : "border-border hover:border-border/80",
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-teal text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? tier.price.annual : tier.price.monthly}
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-brand-teal shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "w-full py-3 rounded-xl font-semibold transition-all",
                  tier.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90 shadow-md"
                    : "bg-muted hover:bg-muted/80",
                )}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
