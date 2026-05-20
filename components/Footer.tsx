import React from "react";
import { WORDMARK, NAV_LINKS, EMAIL, CARBONOCURA } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-20 md:mt-32">
      <div className="mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Logo & Patent */}
          <div>
            <h3 className="font-display text-base md:text-lg font-bold tracking-tight mb-4">
              {WORDMARK}
            </h3>
            <p className="text-sm text-muted mb-4">
              Patent {CARBONOCURA.patentDetails.registrationNumber} · Carbonocura
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-muted mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-muted mb-4">
              Contact
            </h4>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-white hover:text-gold transition-colors block mb-4"
            >
              {EMAIL}
            </a>
            <p className="text-xs text-muted">We respond within 48 hours.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8 md:my-12"></div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8 text-xs text-muted">
          <div>
            <p>
              © 2025 AbvIntel North Inc. All rights reserved.
            </p>
          </div>
          <div className="md:text-right">
            <p>Patent {CARBONOCURA.patentDetails.registrationNumber} granted March 16, 2026.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
