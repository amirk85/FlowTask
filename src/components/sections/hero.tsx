"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-brand-teal/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
          </span>
          v2.0 is now live
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto"
        >
          Ship Projects <span className="text-gradient">3x Faster</span> with AI
          Workflows
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Stop juggling 5 different tools. FlowTask brings your tasks, docs, and
          team chat into one intelligent OS.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2">
            Start Free Trial <ArrowRight size={18} />
          </button>
          <button className="h-12 px-8 rounded-full border border-border hover:bg-muted transition-colors font-semibold text-lg flex items-center gap-2">
            Watch Demo
          </button>
        </motion.div>

        {/* Trust Text */}
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-20">
          <span className="flex items-center gap-1">
            <CheckCircle2 size={14} className="text-brand-teal" /> No credit
            card required
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 size={14} className="text-brand-teal" /> 14-day free
            trial
          </span>
        </div>

        {/* 3D Dashboard Preview (Native Tailwind v4 Utilities) */}
        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 100 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* The Perspective Container */}
          <div className="perspective-dramatic transform-3d group">
            <div
              className="
              relative
              rounded-xl 
              border border-white/10 
              bg-background/50 
              backdrop-blur-sm 
              shadow-2xl 
              
              /* The 3D Magic - Initial State */
              transform-3d
              rotate-x-12 
              transition-all 
              duration-500 
              ease-out
              
              /* Hover State: Flatten slightly */
              group-hover:rotate-x-2
              group-hover:scale-[1.02]
            "
            >
              {/* Add a dummy image or place your screenshot here */}
              <div className="aspect-video bg-slate-900/50 rounded-xl overflow-hidden border border-white/5 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                {/* Replace with actual Next/Image */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  [Dashboard Screenshot Placeholder]
                </div>
              </div>

              {/* Reflection effect */}
              <div className="absolute -bottom-4 left-4 right-4 h-4 bg-brand-teal/20 blur-xl opacity-50 rounded-[100%]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
