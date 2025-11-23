export function SocialProof() {
  return (
    <section className="py-16 border-y border-border bg-muted">
      <div className="container-custom text-center">
        <p className="text-sm font-medium text-muted-foreground mb-8">
          INTEGRATES WITH YOUR STACK
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {["GitHub", "Slack", "Figma", "Linear", "Notion", "Jira"].map((tool) => (
            <div
              key={tool}
              className="text-lg font-semibold text-muted-foreground"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
