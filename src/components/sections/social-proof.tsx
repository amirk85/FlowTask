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

        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap hover:animation-paused">
            {[...integrations, ...integrations].map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div
                  key={`${integration.name}-${index}`}
                  className="group inline-flex flex-col items-center justify-center mx-10 min-w-max transition-colors duration-300"
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                  <span className="text-sm font-semibold mt-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {integration.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
