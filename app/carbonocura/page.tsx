import React from "react";
import { Metadata } from "next";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import PatentPill from "@/components/PatentPill";
import CarbCanvas from "@/components/CarbCanvas";
import RevealOnScroll from "@/components/RevealOnScroll";
import { CARBONOCURA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Carbonocura | AbvIntel North",
  description: "Patent No. 583393. Dual-pathway carbon capture and utilization system.",
};

export default function CarbonoCuraPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 md:pt-40 pb-12 md:pb-20 px-4 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <SectionLabel text="Proprietary Patent" />

          <h1 className="font-display text-6xl md:text-8xl font-bold leading-tight mb-4">
            {CARBONOCURA.hero.heading}
          </h1>

          <p className="text-base md:text-lg text-gold mb-8 tracking-wide">
            {CARBONOCURA.hero.subtitle}
          </p>

          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mb-12">
            {CARBONOCURA.hero.description}
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Button variant="primary" href="#patent-details">
              {CARBONOCURA.hero.cta1}
            </Button>
            <Button variant="outline" href="/contact">
              {CARBONOCURA.hero.cta2}
            </Button>
          </div>
        </div>
      </section>

      {/* Patent Details Table */}
      <section id="patent-details" className="py-20 md:py-32 px-4 md:px-8 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Patent Details
          </h2>

          <RevealOnScroll>
            <div className="border border-border bg-surface overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-medium text-gold w-1/3">Full Title</td>
                    <td className="px-6 py-4 text-white/80">
                      {CARBONOCURA.patentDetails.fullTitle}
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-medium text-gold">Status</td>
                    <td className="px-6 py-4 text-white/80">
                      {CARBONOCURA.patentDetails.status}
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-medium text-gold">Registration Number</td>
                    <td className="px-6 py-4 text-white/80">
                      {CARBONOCURA.patentDetails.registrationNumber}
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-medium text-gold">Grant Date</td>
                    <td className="px-6 py-4 text-white/80">
                      {CARBONOCURA.patentDetails.grantDate}
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-medium text-gold">Application Number</td>
                    <td className="px-6 py-4 text-white/80">
                      {CARBONOCURA.patentDetails.applicationNumber}
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-medium text-gold">Filing Date</td>
                    <td className="px-6 py-4 text-white/80">
                      {CARBONOCURA.patentDetails.filingDate}
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-medium text-gold">Inventor</td>
                    <td className="px-6 py-4 text-white/80">
                      {CARBONOCURA.patentDetails.inventor}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gold">Jurisdiction</td>
                    <td className="px-6 py-4 text-white/80">
                      {CARBONOCURA.patentDetails.jurisdiction}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Technical Description */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
              {CARBONOCURA.technical.heading}
            </h2>

            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mb-12">
              {CARBONOCURA.technical.description}
            </p>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {CARBONOCURA.technical.sections.map((section, idx) => (
                <div key={idx} className="border border-border p-6 md:p-8 bg-surface">
                  <h3 className="font-display text-lg md:text-xl font-bold mb-4">
                    {section.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Software Layer */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {CARBONOCURA.software.heading}
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-12 max-w-3xl">
              {CARBONOCURA.software.subheading}
            </p>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-12">
              {CARBONOCURA.software.sections.map((section, idx) => (
                <div key={idx} className="border border-border p-6 md:p-8 bg-surface">
                  <h3 className="font-display text-lg md:text-xl font-bold mb-3">
                    {section.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4">
                    {section.description}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-white/80 flex gap-2">
                        <span className="text-gold">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Canvas */}
            <CarbCanvas />
          </RevealOnScroll>
        </div>
      </section>

      {/* Strategic Vision */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              {CARBONOCURA.vision.heading}
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-4xl">
              {CARBONOCURA.vision.description}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Callout */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="border border-gold p-8 md:p-12">
            <p className="text-center text-base md:text-lg font-medium italic text-white">
              "{CARBONOCURA.callout}"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
