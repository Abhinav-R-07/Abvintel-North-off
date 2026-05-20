"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeTickerProps {
  text: string;
}

export default function MarqueeTicker({ text }: MarqueeTickerProps) {
  return (
    <div className="w-full overflow-hidden bg-surface border-t border-b border-border py-4 md:py-6">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -1000 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
        className="whitespace-nowrap"
      >
        <div className="inline-flex gap-8">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="text-xs md:text-sm tracking-widest font-medium text-muted uppercase"
            >
              {text}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
