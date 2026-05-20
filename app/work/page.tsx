import React from "react";
import { Metadata } from "next";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import WorkRow from "@/components/WorkRow";
import RevealOnScroll from "@/components/RevealOnScroll";
import { WORK_ENGAGEMENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Work | AbvIntel North",
  description: "Our engagements. Case studies and client work.",
};

export default function WorkPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 md:py-48 px-4 md:px-8 pt-32 md:pt-40">
        <div className="mx-auto w-full max-w-6xl">
          <SectionLabel text="Our Track Record" />

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8 md:mb-12">
            In the Field.
          </h1>

          <p className="text-base md:text-lg text-white/80 max-w-3xl">
            Real engagements. Real impact. Engagements are long-term strategic partnerships.
          </p>
        </div>
      </section>

      {/* Work Rows */}
      <section className="px-4 md:px-8 pb-20 md:pb-32 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll stagger className="space-y-0 border-t border-border">
            {WORK_ENGAGEMENTS.map((engagement, idx) => (
              <WorkRow
                key={idx}
                name={engagement.name}
                subtitle={engagement.subtitle}
                description={engagement.description}
                tags={engagement.tags}
                status={engagement.status as "Active" | "In Development"}
                details={engagement.details}
              />
            ))}
          </RevealOnScroll>

          {/* NDA Note */}
          <p className="text-muted text-sm border-t border-border pt-8 mt-8">
            Additional engagements are confidential under NDA.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Start a new engagement
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
