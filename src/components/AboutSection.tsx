import { Briefcase, Users, Code2, MapPin } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Years of Experience", value: "8+" },
  { icon: Users, label: "Mentees Guided", value: "150+" },
  { icon: Code2, label: "Technologies", value: "Java, Go, AWS" },
  { icon: MapPin, label: "Based in", value: "Bangalore" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-secondary/50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
          About Rohan
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          I'm a Senior Backend Engineer who's spent 8+ years building scalable distributed systems at companies ranging from fast-moving startups to large-scale product organizations. I've hired, mentored, and promoted engineers — and I know what it takes to grow in this industry.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Now I help aspiring and mid-level engineers make smarter career moves — whether that's cracking a top-tier interview, choosing the right tech stack, or building a career roadmap that actually works.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background rounded-xl p-5 text-center border border-border">
              <stat.icon className="mx-auto mb-2 text-primary" size={24} />
              <div className="text-xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
