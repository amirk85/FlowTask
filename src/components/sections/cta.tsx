"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-teal/5 -z-10" />

      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-teal/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Ready to ship <span className="text-brand-teal">3x faster?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Join 5,000+ high-performing teams. Start your 14-day free trial today.
          No credit card required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button className="h-14 px-8 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-brand-teal/20 flex items-center gap-2 mx-auto">
            Get Started for Free <ArrowRight />
          </button>
          <p className="mt-4 text-sm text-muted-foreground">
            Free for 14 days • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
