import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer → Senior SDE at Amazon",
    quote:
      "Rohan helped me identify the exact gaps in my system design prep. Within 3 months of our sessions, I cleared Amazon's loop and got an L5 offer. His structured approach to career planning is unmatched.",
  },
  {
    name: "Arjun Mehta",
    role: "Backend Developer at a Series B Startup",
    quote:
      "I was stuck in the same role for 2 years and didn't know how to move forward. One session with Rohan gave me a crystal-clear roadmap — which skills to prioritize, how to position myself, and when to make the switch. Worth every rupee.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 md:py-28 bg-secondary/50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          What Mentees Say
        </h2>
        <p className="text-lg text-muted-foreground">
          Real results from engineers who took the leap.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-background border border-border rounded-xl p-6 md:p-8">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-foreground leading-relaxed mb-6">"{t.quote}"</blockquote>
            <div>
              <div className="font-semibold text-foreground">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
