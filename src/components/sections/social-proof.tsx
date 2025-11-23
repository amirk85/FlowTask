"use client";

import {
  SiGithub,
  SiSlack,
  SiFigma,
  SiLinear,
  SiNotion,
  SiJira,
  SiTrello,
  SiAsana,
  SiGitlab,
  SiVercel,
} from "react-icons/si";

const integrations = [
  { name: "GitHub", icon: SiGithub },
  { name: "Slack", icon: SiSlack },
  { name: "Figma", icon: SiFigma },
  { name: "Linear", icon: SiLinear },
  { name: "Notion", icon: SiNotion },
  { name: "Jira", icon: SiJira },
  { name: "Trello", icon: SiTrello },
  { name: "Asana", icon: SiAsana },
  { name: "GitLab", icon: SiGitlab },
  { name: "Vercel", icon: SiVercel },
];

export function SocialProof() {
  return (
    <section className="py-16 border-y border-border bg-muted overflow-hidden">
      <div className="container-custom text-center mb-8">
        <p className="text-lg font-medium text-foreground">
          INTEGRATES WITH YOUR STACK
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />

        <div className="marquee-container group">
          <div className="marquee-content">
            {[...integrations, ...integrations].map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div
                  key={`${integration.name}-${index}`}
                  className="marquee-item"
                >
                  <Icon className="logo-icon w-10 h-10 md:w-12 md:h-12" />
                  <span className="text-sm font-semibold mt-2">
                    {integration.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
        }

        .marquee-content {
          display: flex;
          animation: marquee 40s linear infinite;
          will-change: transform;
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        .marquee-item {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 2rem;
          transition: all 0.3s ease;
          color: var(--color-muted-foreground);
        }

        .logo-icon {
          opacity: 0.4;
          transition: all 0.3s ease;
        }

        .marquee-item:hover .logo-icon {
          opacity: 1;
          transform: scale(1.15);
        }

        .marquee-item:hover {
          color: var(--color-foreground);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-content {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
