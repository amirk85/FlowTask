"use client";

import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="section">
      <div className="container-custom text-center">
        <h2 className="font-display font-bold text-5xl md:text-7xl mb-8 max-w-4xl mx-auto leading-tight">
          Ready to ship faster?
        </h2>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Join 5,000+ teams. Start your 14-day free trial. No credit card
          required.
        </p>

        <Link href="#" className="btn btn-primary text-base inline-flex">
          Start Free Trial
        </Link>
      </div>
    </section>
  );
}
