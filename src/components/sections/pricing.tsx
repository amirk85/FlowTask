"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    description: "For individuals and small teams.",
    features: [
      "Up to 3 projects",
      "Basic AI suggestions",
      "7-day history",
      "Community support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 29, annual: 24 },
    description: "For growing teams that ship fast.",
    features: [
      "Unlimited projects",
      "Advanced AI workflows",
      "Unlimited history",
      "Priority support",
      "Guest access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Business",
    price: { monthly: 99, annual: 79 },
    description: "For organizations with compliance needs.",
    features: [
      "SSO & SAML",
      "Dedicated success manager",
      "Custom AI training",
      "SLA guarantees",
      "Audit logs",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Simple pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            No hidden fees. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-muted border border-border rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                !isAnnual
                  ? "bg-background text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isAnnual
                  ? "bg-background text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual <span className="text-accent ml-1">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative p-8 rounded-lg border flex flex-col transition-all hover:shadow-lg ${
                tier.popular
                  ? "border-accent border-2 bg-background shadow-xl scale-105"
                  : "border-border bg-background hover:border-muted-foreground/20"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg z-10">
                  Most Popular
                </div>
              )}

              {/* Accent Bar for Popular Tier */}
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent rounded-t-lg"></div>
              )}

              <div className="mb-8">
                <h3 className="font-bold text-xl mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-bold text-5xl">
                    ${isAnnual ? tier.price.annual : tier.price.monthly}
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                {tier.price.monthly > 0 && isAnnual && (
                  <div className="text-xs text-muted-foreground mt-2">
                    Billed annually (${tier.price.annual * 12}/year)
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className={`rounded-full p-0.5 ${tier.popular ? 'bg-accent' : 'bg-muted'}`}>
                      <Check
                        size={14}
                        className={tier.popular ? 'text-white' : 'text-foreground'}
                        strokeWidth={3}
                      />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  tier.popular
                    ? "bg-accent text-white hover:bg-accent-hover shadow-md"
                    : "bg-muted hover:bg-muted-foreground/10 border border-border"
                }`}
              >
                {tier.cta}
              </button>

              {/* Visual Enhancement - Corner Detail */}
              {tier.popular && (
                <div className="absolute bottom-4 right-4 opacity-5">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="15" fill="currentColor" className="text-accent" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Signal */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            14-day free trial on Pro plan • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
