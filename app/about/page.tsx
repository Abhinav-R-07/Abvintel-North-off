import React from "react";
import { Metadata } from "next";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import PatentPill from "@/components/PatentPill";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ABOUT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | AbvIntel North",
  description: "Abhinav K.R and the story of AbvIntel North.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Personal Section */}
      <section className="py-32 md:py-48 px-4 md:px-8 pt-32 md:pt-40 border-b border-border">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <SectionLabel text="The Founder" />

            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              {/* Avatar */}
              <div className="w-full md:col-span-1">
                <div className="aspect-square border border-border bg-surface overflow-hidden">
                  <img
                    src="/founder.heic"
                    alt="Abhinav K.R"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-2">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">
                  {ABOUT.personal.name}
                </h1>
                <p className="text-lg md:text-xl text-gold font-medium mb-8">
                  {ABOUT.personal.title}
                </p>

                <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
                  {ABOUT.personal.bio}
                </p>

                {/* Patents */}
                <div className="flex flex-wrap gap-3">
                  {ABOUT.personal.patents.map((patent, idx) => (
                    <PatentPill key={idx} label={patent.title} value={patent.number} />
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-b border-border">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Company Story
            </h2>

            <div className="space-y-8 mb-12">
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
                {ABOUT.company.story}
              </p>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
                {ABOUT.company.expansion}
              </p>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="font-display text-lg font-bold mb-8 uppercase tracking-widest">
                Timeline
              </h3>
              <div className="flex overflow-x-auto gap-8 md:gap-12 pb-8">
                {ABOUT.company.timeline.map((item, idx) => (
                  <div key={idx} className="flex-shrink-0">
                    <p className="text-gold font-bold text-lg mb-2">
                      {item.month && `${item.month} `}{item.year}
                    </p>
                    <p className="text-white/80 text-sm max-w-xs">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* IP & Legal */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              IP & Legal
            </h2>

            <div className="space-y-6 text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
              <p>{ABOUT.legal.trademark}</p>
              <p>{ABOUT.legal.patent}</p>
              <p>{ABOUT.legal.copyright}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Let's talk.
            </h2>
            <Button variant="primary" href="/contact">
              Start a Conversation
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
