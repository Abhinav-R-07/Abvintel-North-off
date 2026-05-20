import React from "react";
import { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | AbvIntel North",
  description: "Get in touch. Let's talk about your challenge.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="py-32 md:py-48 px-4 md:px-8 pt-32 md:pt-40">
        <div className="mx-auto w-full max-w-6xl">
          <RevealOnScroll>
            <SectionLabel text="Get in Touch" />

            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              {/* Left Column */}
              <div>
                <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-8">
                  {CONTACT.heading}
                </h1>

                <p className="text-base md:text-lg text-white/80 leading-relaxed mb-12">
                  {CONTACT.description}
                </p>

                {/* Direct Email */}
                <div className="mb-12">
                  <p className="text-xs uppercase tracking-widest font-medium text-muted mb-3">
                    {CONTACT.emailLabel}
                  </p>
                  <a
                    href={`mailto:${CONTACT.emailLabel}`}
                    className="text-2xl md:text-3xl font-bold text-gold hover:text-white transition-colors block mb-4"
                  >
                    hello@abvintel.north
                  </a>
                  <p className="text-sm text-muted">{CONTACT.responseNote}</p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
