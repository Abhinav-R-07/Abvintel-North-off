"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { NAV_LINKS, WORDMARK } from "@/lib/constants";
import Modal from "./Modal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const scrollYMotion = useMotionValue(0);
  const bgOpacity = useTransform(scrollYMotion, [0, 100], [0, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      scrollYMotion.set(y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollYMotion]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8, 8, 8, var(--bg-opacity)), rgba(8, 8, 8, var(--bg-opacity)))",
        }}
        className="fixed top-0 left-0 right-0 z-30 backdrop-blur-sm border-b border-border"
        initial={{ y: 0 }}
      >
        <div className="mx-auto px-4 md:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="font-display text-base md:text-lg font-bold tracking-tight hover:text-gold transition-colors"
            >
              {WORDMARK}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white hover:text-gold transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden md:block px-5 py-2 bg-gold text-bg font-medium text-sm hover:bg-white transition-colors"
              >
                Start a Project
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 text-white hover:text-gold transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-6 pt-6 border-t border-border space-y-4"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-white hover:text-gold transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full mt-4 px-5 py-2 bg-gold text-bg font-medium text-sm hover:bg-white transition-colors"
              >
                Start a Project
              </button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-24"></div>
    </>
  );
}
