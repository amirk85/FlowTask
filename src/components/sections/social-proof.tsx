import {
  SiNextdotjs,
  SiReact,
  SiVercel,
  SiStripe,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

const LOGOS = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Vercel", icon: SiVercel },
  { name: "Stripe", icon: SiStripe },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Framer", icon: SiFramer },
  // Duplicate for seamless loop
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Vercel", icon: SiVercel },
  { name: "Stripe", icon: SiStripe },
];

export function SocialProof() {
  return (
    <section className="py-10 border-y border-white/5 bg-white/5">
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          TRUSTED BY INNOVATIVE TEAMS AT
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex gap-12 animate-scroll min-w-full">
          {LOGOS.map((Logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-muted-foreground opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
            >
              <Logo.icon size={28} />
              <span className="text-xl font-semibold">{Logo.name}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {LOGOS.map((Logo, i) => (
            <div
              key={`dup-${i}`}
              className="flex items-center gap-2 text-muted-foreground opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
            >
              <Logo.icon size={28} />
              <span className="text-xl font-semibold">{Logo.name}</span>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
