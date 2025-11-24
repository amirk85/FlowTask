"use client";

import Link from "next/link";
import { useState } from "react";

export function Hero() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => setRotate({ x: 0, y: 0 });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-32">
      <div className="container-custom text-center">

        <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8 max-w-6xl mx-auto leading-[0.95]">
          Ship faster.
          <br />
          <span className="text-muted-foreground">No chaos.</span>
        </h1>

        <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
          One platform for tasks, docs, and team chat. Built for software teams who value speed over meetings.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <Link href="/signup" className="btn btn-primary text-base">
            Start Free
          </Link>
          <Link href="#features" className="btn btn-secondary text-base">
            See Features
          </Link>
        </div>

        {/* Interactive Dashboard */}
        <div className="max-w-5xl mx-auto mb-24">
          <div
            className="relative [perspective:1200px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetRotation}
          >

            <div
              className="border border-border rounded-xl bg-background overflow-hidden shadow-2xl transition-transform duration-200 ease-out hover:scale-[1.01]"
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
              }}
            >

              <div className="border-b border-border px-6 py-4 flex items-center justify-between bg-muted/30">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <div className="w-24 h-2 bg-muted rounded"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded bg-muted"></div>
                  <div className="w-8 h-8 rounded bg-muted"></div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4">

                  {/* To Do */}
                  <div className="space-y-3">
                    <div className="h-2 w-16 bg-muted-foreground/20 rounded"></div>
                    {[1,2,3].map(i => (
                      <div key={i} className="border border-border rounded-lg p-4 bg-background">
                        <div className="h-2 w-full bg-muted rounded mb-3"></div>
                        <div className="h-2 w-3/4 bg-muted rounded mb-2"></div>
                        <div className="flex gap-2 mt-4">
                          <div className="w-6 h-6 rounded-full bg-accent/20"></div>
                          <div className="w-6 h-6 rounded-full bg-muted"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* In Progress */}
                  <div className="space-y-3">
                    <div className="h-2 w-20 bg-muted-foreground/20 rounded"></div>
                    {[1,2].map(i => (
                      <div key={i} className="border border-accent/30 rounded-lg p-4 bg-accent/5">
                        <div className="h-2 w-full bg-accent/30 rounded mb-3"></div>
                        <div className="h-2 w-3/4 bg-accent/20 rounded mb-2"></div>
                        <div className="flex gap-2 mt-4">
                          <div className="w-6 h-6 rounded-full bg-accent/40"></div>
                          <div className="w-6 h-6 rounded-full bg-accent/20"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Done */}
                  <div className="space-y-3">
                    <div className="h-2 w-12 bg-muted-foreground/20 rounded"></div>
                    {[1,2,3,4].map(i => (
                      <div key={i} className="border border-border rounded-lg p-4 bg-muted/30 opacity-60">
                        <div className="h-2 w-full bg-muted rounded mb-3"></div>
                        <div className="h-2 w-3/4 bg-muted rounded"></div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -right-4 top-1/4 hidden lg:block">
              <div className="bg-background border border-border rounded-lg p-4 shadow-lg w-48 transition-transform"
                   style={{ transform: `translateZ(30px)` }}>
                <div className="text-xs text-muted-foreground mb-2">Velocity</div>
                <div className="font-display font-bold text-3xl mb-2">+32%</div>
                <div className="h-2 bg-accent/20 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-accent rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 bottom-1/4 hidden lg:block">
              <div className="bg-background border border-border rounded-lg p-4 shadow-lg w-48 transition-transform"
                   style={{ transform: `translateZ(30px)` }}>
                <div className="text-xs text-muted-foreground mb-2">Tasks completed</div>
                <div className="font-display font-bold text-3xl">127</div>
                <div className="text-xs text-accent mt-1">↑ 18 this week</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
