import React from "react";
import { Metadata } from "next";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services | AbvIntel North",
  description: "Six disciplines. One studio. Consulting and deep-tech development.",
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 md:py-48 px-4 md:px-8 pt-32 md:pt-40">
        <div className="mx-auto w-full max-w-6xl">
          <SectionLabel text="What We Offer" />

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8 md:mb-12">
            What We Do.
          </h1>

          <p className="text-base md:text-lg text-white/80 max-w-3xl">
            We pair strategic advisory with technical execution. Each discipline stands alone.
            Together, they form a complete studio. No hand-offs. No theories. Just results.
          </p>
        </div>
      </section>

      {/* Services Detail Blocks */}
      <section className="px-4 md:px-8 pb-20 md:pb-32 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll stagger className="space-y-0">
            {SERVICES.map((service, idx) => (
              <div
                key={idx}
                className={`grid md:grid-cols-3 gap-8 md:gap-12 py-12 md:py-16 ${
                  idx !== SERVICES.length - 1 ? "border-b border-border" : ""
                } ${idx % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                {/* Number & Title */}
                <div className={idx % 2 === 1 ? "md:col-start-3" : ""}>
                  <div className="text-5xl md:text-6xl font-bold font-display text-gold mb-4">
                    {service.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-display">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className={idx % 2 === 1 ? "md:col-start-1 md:row-start-1" : "md:col-span-2"}>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs tracking-widest uppercase text-muted border border-border px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Ready to work together?
            </h2>
            <Button variant="primary" href="/contact">
              Get in Touch
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
