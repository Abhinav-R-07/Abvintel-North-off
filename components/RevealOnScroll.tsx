"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface RevealOnScrollProps {
  children: React.ReactNode;
  stagger?: boolean;
  className?: string;
  delay?: number;
}

export default function RevealOnScroll({
  children,
  stagger = false,
  className = "",
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={stagger ? staggerContainer : fadeUp}
      className={className}
    >
      {stagger ? (
        <div className="contents">{children}</div>
      ) : (
        children
      )}
    </motion.div>
  );
}
