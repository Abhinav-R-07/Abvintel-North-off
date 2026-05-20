import React from "react";
import { Metadata } from "next";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import PatentPill from "@/components/PatentPill";
import MarqueeTicker from "@/components/MarqueeTicker";
import ServiceCard from "@/components/ServiceCard";
import WorkRow from "@/components/WorkRow";
import CarbCanvas from "@/components/CarbCanvas";
import RevealOnScroll from "@/components/RevealOnScroll";
import { HOME, SERVICES, WORK_ENGAGEMENTS, ABOUT, CARBONOCURA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AbvIntel North | We Build What Others Can't Imagine",
  description: "Consulting studio building proprietary deep-tech and client solutions.",
  openGraph: {
    title: "AbvIntel North",
    description: "We Build What Others Can't Imagine.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 md:pt-40 pb-12 md:pb-20 px-4 md:px-8">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(200, 169, 110, 0.05) 25%, rgba(200, 169, 110, 0.05) 26%, transparent 27%, transparent 74%, rgba(200, 169, 110, 0.05) 75%, rgba(200, 169, 110, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(200, 169, 110, 0.05) 25%, rgba(200, 169, 110, 0.05) 26%, transparent 27%, transparent 74%, rgba(200, 169, 110, 0.05) 75%, rgba(200, 169, 110, 0.05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <SectionLabel text={HOME.hero.eyebrow} />

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left: Heading */}
            <div>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
                {HOME.hero.heading[0]}
                <br />
                {HOME.hero.heading[1]}
                <br />
                <span
                  style={{
                    WebkitTextStroke: "1px #F2F0EC",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {HOME.hero.headingOutline}
                </span>
              </h1>
            </div>

            {/* Right: Subtext & CTAs */}
            <div className="flex flex-col justify-start">
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
                {HOME.hero.subtext}
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button variant="primary" href="/services">
                  {HOME.hero.cta1}
                </Button>
                <Button variant="outline">
                  {HOME.hero.cta2}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee at bottom */}
        <div className="relative z-10 mt-12 md:mt-16 w-full -mx-4 md:-mx-8">
          <MarqueeTicker text={HOME.marqueeTicker} />
        </div>
      </section>

      {/* Services Strip */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                {HOME.services.header}
              </h2>
            </div>
            <div>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                {HOME.services.descriptor}
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <RevealOnScroll stagger className="grid md:grid-cols-2 gap-6 md:gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.number}
                number={service.number}
                title={service.title}
                description={service.description}
                tags={service.tags}
              />
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* Carbonocura Teaser */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Text */}
            <RevealOnScroll>
              <SectionLabel text="Innovation" />

              <div className="inline-flex mb-8">
                <PatentPill label={CARBONOCURA.hero.heading} value="583393" />
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                {HOME.carbonocuraTeaser.heading}
              </h2>

              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
                {HOME.carbonocuraTeaser.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                {HOME.carbonocuraTeaser.stats.map((stat, idx) => (
                  <PatentPill key={idx} label={stat.label} value={stat.value} />
                ))}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {HOME.carbonocuraTeaser.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-gold text-lg mt-1">⬡</span>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="ghost" href="/carbonocura">
                Learn More
              </Button>
            </RevealOnScroll>

            {/* Right: Canvas */}
            <RevealOnScroll>
              <CarbCanvas />
            </RevealOnScroll>
          </div>

          {/* Callout Quote */}
          <div className="mt-12 md:mt-20 border border-gold p-8 md:p-12">
            <p className="text-center text-base md:text-lg font-medium italic text-white">
              "{HOME.carbonocuraTeaser.callout}"
            </p>
          </div>
        </div>
      </section>

      {/* Work Teaser */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 md:mb-16">
            {HOME.work.header}
          </h2>

          {/* Work Rows */}
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

          <p className="text-muted text-sm mt-8 mb-8">{HOME.work.note}</p>

          <Button variant="ghost" href="/work">
            {HOME.work.link}
          </Button>
        </div>
      </section>

      {/* Why AbvIntel North */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 md:mb-16">
            {HOME.why.header}
          </h2>

          <RevealOnScroll stagger className="grid md:grid-cols-2 gap-8 md:gap-12">
            {HOME.why.categories.map((category, idx) => (
              <div key={idx} className="border border-border p-6 md:p-8 bg-surface">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3">
                  {category.title}
                </h3>
                <p className="text-base text-white/80 leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <SectionLabel text="Meet the Founder" />

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              {HOME.about.heading}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Avatar */}
              <div className="w-64 h-64 md:w-80 md:h-80 border border-border bg-surface overflow-hidden">
                <img
                  src="/founder.jpg"
                  alt="Abhinav K.R"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bio */}
              <div>
                <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
                  {HOME.about.bio}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {ABOUT.personal.patents.map((patent, idx) => (
                    <PatentPill key={idx} label={patent.title} value={patent.number} />
                  ))}
                </div>

                <Button variant="ghost" href="/about">
                  Full Story
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-t border-border">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {HOME.contact.heading}
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-12">
              {HOME.contact.subtext}
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Quick Contact */}
            <RevealOnScroll>
              <h3 className="font-display text-lg font-bold mb-4">Direct Email</h3>
              <a
                href={`mailto:contact@abvintelnorth.com`}
                className="text-gold hover:text-white transition-colors font-medium mb-6 block"
              >
                contact@abvintelnorth.com
              </a>
              <p className="text-muted text-sm">We respond within 48 hours.</p>
            </RevealOnScroll>

            {/* Full Form */}
            <RevealOnScroll>
              <Button variant="ghost" href="/contact">
                Get in Touch
              </Button>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
