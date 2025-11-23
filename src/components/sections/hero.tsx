"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-32">
      <div className="container-custom text-center">
        {/* Headline - MASSIVE typography */}
        <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8 max-w-6xl mx-auto leading-[0.95]">
          Ship faster.
          <br />
          <span className="text-muted-foreground">No chaos.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
          One platform for tasks, docs, and team chat. Built for software teams who value speed over meetings.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <Link
            href="/signup"
            className="btn btn-primary text-base"
          >
            Start Free
          </Link>
          <Link
            href="#features"
            className="btn btn-secondary text-base"
          >
            See Features
          </Link>
        </div>

        {/* Stats - Clean, Bold, Data-Driven */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto pt-16 border-t border-border">
          <div>
            <div className="font-display font-bold text-4xl md:text-5xl mb-2">3x</div>
            <div className="text-sm text-muted-foreground">Faster shipping</div>
          </div>
          <div>
            <div className="font-display font-bold text-4xl md:text-5xl mb-2">80%</div>
            <div className="text-sm text-muted-foreground">Less meetings</div>
          </div>
          <div>
            <div className="font-display font-bold text-4xl md:text-5xl mb-2">5K+</div>
            <div className="text-sm text-muted-foreground">Teams using</div>
          </div>
        </div>
      </div>
    </section>
  );
}
