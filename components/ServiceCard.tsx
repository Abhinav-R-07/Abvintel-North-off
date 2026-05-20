"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerItem, cardHover } from "@/lib/animations";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export default function ServiceCard({
  number,
  title,
  description,
  tags,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="group relative border border-border p-6 md:p-8 bg-surface hover:bg-surface2 transition-colors duration-300"
    >
      {/* Top bar animation on hover */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 left-0 right-0 h-1 bg-gold origin-left"
      ></motion.div>

      <div className="flex gap-4 mb-4">
        <span className="text-4xl font-bold font-display text-gold">{number}</span>
      </div>

      <h3 className="text-lg md:text-xl font-bold mb-3 font-display">{title}</h3>
      <p className="text-sm md:text-base text-white/80 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs tracking-widest uppercase text-muted border border-border px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
