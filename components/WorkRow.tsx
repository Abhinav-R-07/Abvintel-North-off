"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";

interface WorkRowProps {
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: "Active" | "In Development";
  details?: string[];
}

export default function WorkRow({
  name,
  subtitle,
  description,
  tags,
  status,
  details,
}: WorkRowProps) {
  const statusColor = status === "Active" ? "bg-green" : "bg-gold";

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ backgroundColor: "#161616" }}
      className="border-t border-border py-8 md:py-10 px-0 hover:bg-surface2 transition-colors duration-300"
    >
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6">
        <div className="flex items-start gap-4">
          {/* Status pulse dot */}
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-2 h-2 rounded-full ${statusColor}`}
            ></motion.div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-display">
                {name}
              </h3>
              <p className="text-xs md:text-sm text-muted uppercase tracking-widest mt-1">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4">
            {description}
          </p>
          {details && (
            <ul className="text-xs md:text-sm text-muted space-y-1 mb-4">
              {details.map((detail, idx) => (
                <li key={idx} className="list-disc list-inside">
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs tracking-widest uppercase text-muted border border-border px-2 py-1"
          >
            {tag}
          </span>
        ))}
        <span
          className={`text-xs tracking-widest uppercase font-medium px-2 py-1 border border-current ${
            status === "Active" ? "text-green border-green" : "text-gold border-gold"
          }`}
        >
          {status}
        </span>
      </div>
    </motion.div>
  );
}
