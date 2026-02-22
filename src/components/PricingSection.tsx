import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const benefits = [
  "45-minute 1-on-1 video call",
  "Personalized career roadmap",
  "Resume & LinkedIn review",
  "System design or interview prep",
  "Follow-up action items via email",
  "Flexible rescheduling",
];

const PricingSection = () => (
  <section id="pricing" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-md mx-auto">
        <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 md:p-10 text-center shadow-lg shadow-primary/5">
          <div className="text-sm font-medium text-primary mb-2">Mentorship Session</div>
          <div className="flex items-baseline justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-foreground">₹1,999</span>
          </div>
          <div className="text-muted-foreground mb-8">per 45-minute session</div>

          <ul className="text-left space-y-3 mb-8">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                <Check size={18} className="text-primary mt-0.5 shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="w-full text-base py-6 rounded-xl">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book Your Session
              <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            Secure payment · Flexible rescheduling · 100% satisfaction
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
