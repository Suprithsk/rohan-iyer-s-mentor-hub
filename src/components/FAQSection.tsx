import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who is this mentorship for?",
    a: "This is designed for aspiring developers, junior-to-mid engineers, and anyone looking to break into or grow within backend engineering and tech in general.",
  },
  {
    q: "How does the session work?",
    a: "After booking, you'll receive a link to a 45-minute Google Meet call. You can share your goals beforehand so I can prepare tailored advice.",
  },
  {
    q: "Can I reschedule or cancel?",
    a: "Yes — you can reschedule up to 12 hours before the session at no extra cost. Cancellations within 12 hours are non-refundable.",
  },
  {
    q: "Will one session be enough?",
    a: "Many mentees get clarity and actionable next steps in a single session. For ongoing guidance, you can book follow-up sessions as needed.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "Your satisfaction matters. If you feel the session wasn't valuable, reach out within 24 hours and we'll find a resolution.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-secondary/50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
