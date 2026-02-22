import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-[90vh] flex items-center pt-16">
    <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
          Senior Backend Engineer · Career Mentor
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          Navigate Your Tech Career{" "}
          <span className="text-primary">With Confidence</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          8+ years of backend engineering experience distilled into a focused 45-minute mentorship session — career strategy, system design, and interview prep tailored to you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/20">
            <a href="#pricing">
              Book a 45-Minute Call — ₹1,999
              <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-base text-muted-foreground">
            <a href="#about">Learn more</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
