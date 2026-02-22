import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Your Next Career Move Starts Here
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Stop guessing and start building a career strategy that works. Let's make your next 45 minutes count.
        </p>
        <Button asChild size="lg" className="text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/20">
          <a href="#pricing">
            Book a 45-Minute Call — ₹1,999
            <ArrowRight className="ml-2" size={18} />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
