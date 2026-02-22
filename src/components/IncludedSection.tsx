import { Route, FileText, MessageSquare, Layers } from "lucide-react";

const items = [
  {
    icon: Route,
    title: "Career Roadmap Review",
    description: "Get a clear, actionable plan for your next 6–12 months — roles to target, skills to build, and gaps to close.",
  },
  {
    icon: FileText,
    title: "Resume & Profile Feedback",
    description: "Line-by-line feedback on your resume and LinkedIn to make sure they land with hiring managers and recruiters.",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description: "Mock behavioral and system design questions with real-time feedback — the same bar top companies use.",
  },
  {
    icon: Layers,
    title: "System Design Guidance",
    description: "Deep-dive into high-level and low-level design problems so you can think like a senior engineer.",
  },
];

const IncludedSection = () => (
  <section id="included" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          What's Included in Every Session
        </h2>
        <p className="text-lg text-muted-foreground">
          Every 45-minute call is structured to deliver maximum value — no fluff, just actionable guidance.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="group bg-background border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
              <item.icon className="text-primary" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IncludedSection;
